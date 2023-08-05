import {URL_API} from '../../api/const';
import axios from 'axios';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  const arr = [];

  if (!token) return;

  axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data: {data}}) => {
      data.children.map(item => {
        arr.push(item.data);
      });
      dispatch(postsRequestSuccess(arr));
    })
    // .then(data => setPosts(data))
    .catch((err) => {
      console.log(err);
      dispatch(postsRequestError(err.toString()));
    });
};
