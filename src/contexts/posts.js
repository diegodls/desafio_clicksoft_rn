import React, {useState, createContext, useContext} from 'react';

import {loadApiPosts, deleteApiPost, saveApiPost} from '../services/post';
import {loadApiUsers} from '../services/user';

export const PostsContext = createContext({});

export const PostsProvider = ({children}) => {
  const [apiPosts, setApiPosts] = useState([]);
  const [apiUsers, setApiUsers] = useState([]);
  const [mergedData, setMergedData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState('');
  const [idToDelete, setIdToDelete] = useState(null);
  const [postToSave, setPostToSave] = useState(null);

  async function mergePosts(arrPost, arrUsers) {
    if (arrPost && arrUsers) {
      setLoadingData(true);
      let arrTemp = [];

      arrPost.forEach(post => {
        arrUsers.forEach(user => {
          if (post.userId === user.id) {
            arrTemp.push({...post, author: user.name});
          }
        });
      });

      setLoadingData(false);
      return arrTemp;
    } else {
      return null;
    }
  }

  async function loadAndMergePosts() {
    const postResponse = await loadApiPosts();
    const userResponse = await loadApiUsers();

    let arrMerged = [];

    if (postResponse && userResponse) {
      setLoadingData(true);
      arrMerged = await mergePosts(postResponse.data, userResponse.data);
      setMergedData(arrMerged);
      setLoadingData(false);
      setApiError(false);
      setApiPosts(postResponse.data);
      setApiUsers(userResponse.data);
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

  async function savePost() {
    if (postToSave) {
      const saveResponse = await saveApiPost(postToSave);

      let arrTemp = [postToSave].concat(mergedData); //concat para adicionar no inicio, pois a api não "salva" no db
      let arrMerged = await mergePosts(arrTemp, apiUsers);
      if (saveResponse.status === 201) {
        setMergedData(arrMerged);
        setPostToSave(null);
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
        savePost,
        setPostToSave,
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
