const initialState = {
    completedTask: [],
    loading: false,
    error: null,
  };
  
  const completedReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_COMPLETED_TASK_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "FETCH_COMPLETED_TASK_SUCCESS":
        return {
          ...state,
          completedTask: action.completedTask,
          loading: false,
          error: null,
        };
      case "GET_ALL_COMPLETED_TASK":
      return{
        ...state,
        completedTask:action.post,
        loading:false,
        error:null
      };
      case "FETCH_COMPLETED_TASK_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.completedTask,
        };
      case "ADD_COMPLETED_TASK_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "ADD_COMPLETED_TASK_SUCCESS":
        return {
          ...state,
          completedTask: [...state, action.completedTask],
          loading: false,
          error: null
        };
      default:
        return state;
    }
  };
  
  export default completedReducer;
  