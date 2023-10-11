const post = [];
export const fetchPosts = async (dispatch, post) => {
  try {
    dispatch({ type: "FETCH_POSTS_SUCCESS", post: post });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", post: error.message });
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