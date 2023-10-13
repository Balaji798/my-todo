export const setTodo = async (dispatch, todoData) => {
  try {
    dispatch({ type: "FETCH_TODO_LIST_SUCCESS", todoData: todoData });
  } catch (error) {
    dispatch({ type: "FETCH_TODO_LIST_FAILURE", todoData: error.message });
  }
};

export const deleteTodo = async (dispatch, todoData, id) => {
  try {
    const data = todoData.filter((item) => {
      if (item.id !== id) return item;
      return null;
    });
    dispatch({ type: "DELETE_TODO_LIST_SUCCESS", todoData: data });
  } catch (error) {
    dispatch({ type: "FETCH_TODO_LIST_FAILURE", todoData: error.message });
  }
};

// export const getPost = async (dispatch) => {
//   try {
//     const res = await ApiService.getAllPost();
//     dispatch({ type: "GET_ALL_POSTS", post: res.data });
//   } catch (error) {
//     dispatch({ type: "FETCH_POSTS_FAILURE", post: error.message });
//   }
// };
