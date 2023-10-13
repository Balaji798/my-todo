const initialState = {
  todoData: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODO_LIST_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_TODO_LIST_SUCCESS":
      return {
        ...state,
        todoData: action.todoData,
        loading: false,
        error: null,
      };
    case "GET_ALL_TODO_LIST":
    return{
      ...state,
      todoData:action.post,
      loading:false,
      error:null
    };
    case "FETCH_TODO_LIST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.todoData,
      };
    case "ADD_TODO_LIST_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_TODO_LIST_SUCCESS":
      return {
        ...state,
        todoData: [...state, action.todoData],
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default todoReducer;
