import PropTypes from 'prop-types';
import React from 'react';
import {usePosts} from '../hooks/usePosts';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [posts] = usePosts();
  console.log(`posts`, posts);
  return (
    <postsContext.Provider value={{posts}}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

