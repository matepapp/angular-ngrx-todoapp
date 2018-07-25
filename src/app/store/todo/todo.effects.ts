import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { TodoState } from './todo.state';
import { TodoActions, TodoActionTypes } from './todo.action';

@Injectable()
export class TodoEffects {

  constructor(private http: Http, private actions$: Actions) { }

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetTodos$: Observable<TodoActions> = this.actions$.
    ofType<TodoActions>(TodoActionTypes.GET_TODOS)
    .mergeMap(action =>
      this.http.get(environment.client.base_url + '/api/todos')
        .map((data: Response) => {

          console.log(data);
          return new TodoActions.GetTodosSuccess(data["data"]["docs"] as TodoState[]);
        })
        .catch(() => of(new TodoActions.GetTodoError()))
    );
}
