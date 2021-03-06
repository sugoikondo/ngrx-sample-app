import Todo from '../../models/todo.model';
import { initializeTodoState, TodoListState, TodoState } from './todo.state'
import * as TodoActions from './todo.action';

export type Action = TodoActions.All;

const defaultTodoStates: TodoState[] = [{
    ...Todo.generateMockTodo(),
    ...initializeTodoState()
}]

const defaultState: TodoListState = {
  todos: defaultTodoStates,
  loading: false,
  pending: 0
}

export function TodoReducer(state = defaultState, action: Action) {
  console.log(state, action)

  switch (action.type) {
  case TodoActions.GET_TODOS: {
    return { ...state, loaded: false, loasing: true }
  }
  case TodoActions.GET_TODOS_SUCCESS: {
    return {
        ...state,
      todos: [
          ...action.payload,
        defaultTodoStates[0]
      ],
      loading: false
    };
  }

  case TodoActions.DELETE_TODO: {
    return { ...state, ...state.todos.splice(state.todos.indexOf(action.payload), 1) };
  }

  case TodoActions.DELETE_TODO_SUCCESS: {
    return state
  }

  case TodoActions.DELETE_TODO_ERROR: {
    return {
        ...state,
      todos: [
          ...state.todos,
        action.payload
      ]
    }
  }
  }
}
