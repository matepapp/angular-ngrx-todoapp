import { Action } from '@ngrx/store';

import { TodoState } from './todo.state';
import Todo from '../../models/todo.model';

export enum TodoActionTypes {
  GET_TODO = '[Todo] GET_TODO',
  GET_TODO_SUCCESS = '[Todo] GET_TODO_SUCCESS',
  GET_TODO_ERROR = '[Todo] GET_TODO_ERROR',
  GET_TODOS = '[Todo] GET_TODOS',
  GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS',
  GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR'
};

export class GetTodo implements Action {
  readonly type = TodoActionTypes.GET_TODO;

  constructor(public payload: string) { }
}

export class GetTodoSuccess implements Action {
  readonly type = TodoActionTypes.GET_TODO_SUCCESS;

  constructor(public payload: Todo) { }
}

export class GetTodoError implements Action {
  readonly type = TodoActionTypes.GET_TODO_ERROR;
}

export class GetTodos implements Action {
  readonly type = TodoActionTypes.GET_TODOS;
}

export class GetTodosSuccess implements Action {
  readonly type = TodoActionTypes.GET_TODOS_SUCCESS;

  constructor(public payload: TodoState[]) { }
}

export class GetTodosError implements Action {
  readonly type = TodoActionTypes.GET_TODOS_ERROR;
}


export type TodoActions =
  GetTodo
  | GetTodoSuccess
  | GetTodoError
  | GetTodos
  | GetTodosSuccess
  | GetTodosError;

