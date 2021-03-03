import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder.js";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

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

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: res.data });
};

// MEMOIZED VERSION
// * note: The issue with the below method of memoization is that now, if we ever want to retrieve a specific user again, we'd have to create an entirely new arrow function...
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: res.data });
// });
