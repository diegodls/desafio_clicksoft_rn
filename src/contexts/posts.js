import React, {useState, createContext, useContext} from 'react';

import {loadApiPosts, deleteApiPost} from '../services/post';
import {loadApiUsers} from '../services/user';

export const PostsContext = createContext({});

export const PostsProvider = ({children}) => {
  const [mergedData, setMergedData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState('');
  const [idToDelete, setIdToDelete] = useState(null);

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
      setApiError(true);
      setApiErrorMessage(
        `Erro ao carregar ${!postResponse ? 'Mensagens' : ''}${
          !postResponse && !userResponse ? 'e' : ''
        }${!userResponse ? 'Usuários' : ''} da API!`,
      );
      setLoadingData(false);
    }
  }

  async function deletePost() {
    if (idToDelete) {
      let arrTemp = mergedData.filter(item => item.id !== idToDelete);
      const deleteResponse = await deleteApiPost(idToDelete);
      if (deleteResponse.status === 200) {
        setMergedData(arrTemp);
        setIdToDelete(null);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
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
        setIdToDelete,
      }}>
      {children}
    </PostsContext.Provider>
  );
};

export function usePosts() {
  const context = useContext(PostsContext);
  return context;
}

export default PostsContext;
