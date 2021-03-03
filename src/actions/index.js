import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder.js";

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: res.data });
};

// THE ABOVE IS THE EXACT SAME AS THE BELOW
// export const fetchPosts = () => {
//   return async function (dispatch, getState) {
//     const res = await jsonPlaceholder.get('/posts');

//     dispatch({ type: 'FETCH_POSTS', payload: res})
//   }
// };

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: res.data });
});
