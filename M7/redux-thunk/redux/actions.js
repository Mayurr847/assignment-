import axios from 'axios';

const API_URL = 'http://localhost:5000/posts';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: 'FETCH_POSTS_REQUEST' });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, post);
    dispatch(fetchPosts());
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch(fetchPosts());
  } catch (error) {
    console.error(error);
  }
};
