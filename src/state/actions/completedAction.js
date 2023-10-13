export const setCompletedList = async (dispatch, completedTask) => {
    try {
      dispatch({ type: "FETCH_COMPLETED_TASK_SUCCESS", completedTask: completedTask });
    } catch (error) {
      dispatch({ type: "FETCH_COMPLETED_TASK_ERROR", completedTask: error.message });
    }
  };