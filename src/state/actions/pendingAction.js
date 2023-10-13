export const setPendingTask = async (dispatch, todoData) => {
  try {
    dispatch({ type: "FETCH_PENDING_TASK_SUCCESS", pendingTask: todoData });
  } catch (error) {
    dispatch({ type: "FETCH_PENDING_TASK_ERROR", pendingTask: error.message });
  }
};
