import {useContext, useEffect, useState} from 'react';
import {postsContext} from '../context/postsContext';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const useCommentsData = (id) => {
  const [comments, setComments] = useState([]);
  const [postData, setPostData] = useState({});
  const token = useSelector(state => state.token);
  const {posts} = useContext(postsContext);

  useEffect(() => {
    if (!posts) return;
    fetch(`${URL_API}/comments/${id}?limit=7`, {
      headers: {
        'Authorization': `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          return;
        }
        return response.json();
      })
      .then((data) => {
        setPostData(data[0].data.children[0].data);
        setComments(data[1].data.children);
      })
      .catch((err) => console.error(err));
  }, [token]);

  return [comments, postData];
};
