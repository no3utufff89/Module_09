import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../store/posts/postsAction';

export const usePosts = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenReducer.token);
  const loading = useSelector(state => state.authReducer.loading);

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [loading];
};
