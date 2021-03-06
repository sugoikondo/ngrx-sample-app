import { TodoState } from './todo.state'
import Todo          from '../../models/todo.model';
import { Action }    from '@ngrx/store';

export const GET_TODO          = '[Todo] GET_TODO';
export const GET_TODO_SUCCESS  = "[Todo] GET_TODO_SUCCESS";
export const GET_TODO_ERROR    = "[Todo] GET_TODO_ERROR";
export const GET_TODOS         = '[Todo] GET_TODOS';
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR   = '[Todo] GET_TODOS_ERROR';

export class GetTodos implements Action {
  readonly type = GET_TODO;
}

export class GetTodosSuccess implements Action {
  readonly type GET_TODOS_SUCCESS;

  constructor(public payload: TodoState[]){};
}

export class GetTodoError implements Action {
    readonly type = GET_TODO_ERROR;
}

export type All = GetTodo | GetTodoSuccess | GetTodoError |
GetTodos | GetTodosSuccess | GetTodosError;
