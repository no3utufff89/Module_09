import {URL_API} from '../api/const';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const token = useSelector(state => state.token);
  const arr = [];

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(`ошибка ${response.status}`);
        }
        return response.json();
      })
      .then(postData => {
        postData.data.children.map(item => {
          arr.push(item.data);
        });
        return arr;
      })
      .then(data => setPosts(data))
      .catch((err) => console.error(err));
  }, [token]);

  return [posts];
};
