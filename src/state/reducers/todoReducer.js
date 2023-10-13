const initialState = {
  todoData: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        todoData: action.todoData,
        loading: false,
        error: null,
      };
    case "GET_ALL_POSTS":
    return{
      ...state,
      todoData:action.post,
      loading:false,
      error:null
    };
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.todoData,
      };
    case "ADD_POST_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_POST_SUCCESS":
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
