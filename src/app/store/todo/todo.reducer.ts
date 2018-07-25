import Todo from '../../models/todo.model';
import { initializeTodoState, TodoListState, TodoState } from './todo.state';
import { TodoActionTypes, TodoActions } from './todo.action';

const defaultTodoStates: TodoState[] = [
  {
    ...Todo.generateMock(),
    ...initializeTodoState()
  }
];

const defaultState: TodoListState = {
  todos: defaultTodoStates,
  loading: false,
  pending: 0
};

export function TodoReducer(state: TodoListState = defaultState, action: TodoActions): TodoListState {
  console.log(state, action);

  switch (action.type) {
    case TodoActionTypes.GET_TODOS:
      return { ...state, loading: true };

    case TodoActionTypes.GET_TODOS_SUCCESS:
    return {
      ...state,
      todos: [
        ...action.payload,
        defaultTodoStates[0]
      ],
      loading: false
    };

    case TodoActionTypes.DELETE_TODO:
      const todos = state.todos.splice(state.todos.indexOf(action.payload), 1);
      return { ...state, todos };

    case TodoActionTypes.DELETE_TODO_ERROR:
      return {
        ...state,
        todos: [
            ...state.todos,
            action.payload
        ]
      };

    default:
      return state;
  }
}
