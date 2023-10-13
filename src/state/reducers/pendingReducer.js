const initialState = {
    pendingTask: [],
    loading: false,
    error: null,
  };
  
  const pendingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PENDING_TASK_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "FETCH_PENDING_TASK_SUCCESS":
        return {
          ...state,
          pendingTask: action.pendingTask,
          loading: false,
          error: null,
        };
      case "GET_ALL_PENDING_TASK":
      return{
        ...state,
        pendingTask:action.post,
        loading:false,
        error:null
      };
      case "FETCH_PENDING_TASK_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.pendingTask,
        };
      case "ADD_PENDING_TASK_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "ADD_PENDING_TASK_SUCCESS":
        return {
          ...state,
          pendingTask: [...state, action.pendingTask],
          loading: false,
          error: null
        };
      default:
        return state;
    }
  };
  
  export default pendingReducer;
  