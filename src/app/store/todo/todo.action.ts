import { Action } from '@ngrx/store';

import { TodoState } from './todo.state';
import Todo from '../../models/todo.model';

export enum TodoActionTypes {
  GET_TODO = '[Todo] GET_TODO',
  GET_TODO_SUCCESS = '[Todo] GET_TODO_SUCCESS',
  GET_TODO_ERROR = '[Todo] GET_TODO_ERROR',

  GET_TODOS = '[Todo] GET_TODOS',
  GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS',
  GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR',

  CREATE_TODO = '[Todo] CREATE_TODO',
  CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS',
  CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR',

  UPDATE_TODO = '[Todo] UPDATE_TODO',
  UPDATE_TODO_SUCCESS = '[Todo] UPDATE_TODO_SUCCESS',
  UPDATE_TODO_ERROR = '[Todo] UPDATE_TODO_ERROR',

  DELETE_TODO = '[Todo] DELETE_TODO',
  DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS',
  DELETE_TODO_ERROR = '[Todo] DELETE_TODO_ERROR',

  COMPLETE_TODO = '[Todo] COMPLETE_TODO'
};

// Actions for getting Todos
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

// Action for creating Todos
export class CreateTodo implements Action {
  readonly type = TodoActionTypes.CREATE_TODO;

  constructor(public payload: Todo) { }
}

export class CreateTodoSuccess implements Action {
  readonly type = TodoActionTypes.CREATE_TODO_SUCCESS;

  constructor(public payload: TodoState) { }
}

export class CreateTodoError implements Action {
  readonly type = TodoActionTypes.CREATE_TODO_ERROR;
}

// Action for updating Todos
export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO;

  constructor(public payload: TodoState) { }
}

export class UpdateTodoSuccess implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO_SUCCESS;

  constructor(public payload: TodoState) { }
}

export class UpdateTodoError implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO_ERROR;

  constructor(public payload: TodoState) { }
}

// Actions for deleting Todos
export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DELETE_TODO;

  constructor(public payload: TodoState) { }
}

export class DeleteTodoSuccess implements Action {
  readonly type = TodoActionTypes.DELETE_TODO_SUCCESS;

  constructor(public payload: TodoState) { }
}

export class DeleteTodoError implements Action {
  readonly type = TodoActionTypes.DELETE_TODO_ERROR;

  constructor(public payload: TodoState) { }
}

// Action for complete a Todo
export class CompleteTodo implements Action {
  readonly type = TodoActionTypes.COMPLETE_TODO;

  constructor(public payload: TodoState) { }
}

export type TodoActions = GetTodo
  | GetTodoSuccess
  | GetTodoError
  | GetTodos
  | GetTodosSuccess
  | GetTodosError
  | DeleteTodo
  | DeleteTodoSuccess
  | DeleteTodoError
  | CreateTodo
  | CreateTodoSuccess
  | CreateTodoError
  | UpdateTodo
  | UpdateTodoSuccess
  | UpdateTodoError
  | CompleteTodo;
