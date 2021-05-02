import React, {useState, createContext} from 'react';

import {loadApiPosts} from '../services/post';
import {loadApiUsers} from '../services/user';

const PostsContext = createContext({});

export const PostsProvider = ({children}) => {
  const [mergedData, setMergedData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  async function loadAndMergePosts() {
    const postResponse = await loadApiPosts();
    const userResponse = await loadApiUsers();

    if (postResponse && userResponse) {
      setLoadingData(true);
      let arrTemp = [];

      postResponse.data.forEach(post => {
        userResponse.data.forEach(user => {
          if (post.userId === user.id) {
            arrTemp.push({...post, author: user.name});
          }
        });
      });

      setMergedData(arrTemp);
      setLoadingData(false);
      setApiError(false);
    } else {
      setApiError(false);
      setApiErrorMessage('Erro ao carregar dados da API!');
    }
  }

  function deletePost(id) {
    let arrTemp = mergedData.filter(item => item.id !== id);
    setMergedData(arrTemp);
  }

  return (
    <PostsContext.Provider
      value={{
        mergedData,
        loadingData,
        apiError,
        apiErrorMessage,
        loadAndMergePosts,
        deletePost,
      }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
