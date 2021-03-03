import jsonPlaceholder from "../apis/jsonPlaceholder.js";

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: res });
};

// THE ABOVE IS THE EXACT SAME AS THE BELOW
// export const fetchPosts = () => {
//   return async function (dispatch, getState) {
//     const res = await jsonPlaceholder.get('/posts');

//     dispatch({ type: 'FETCH_POSTS', payload: res})
//   }
// };
