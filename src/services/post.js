import api from './api';

export async function loadApiPost(id) {
  const response = await api
    .get(`/posts/${id}`)
    .then(res => {
      if (res.status === 200) {
        return res;
      } else {
        return null;
      }
    })
    .catch(() => {
      return null;
    });
  return response;
}

export async function loadApiPosts() {
  const response = await api
    .get('/posts')
    .then(res => {
      return res;
    })
    .catch(() => {
      return null;
    });
  return response;
}

export async function deleteApiPost(id) {
  const response = await api
    .delete(`/posts/${id}`, {
      method: 'DELETE',
    })
    .then(res => {
      console.log(typeof res.status);
      return res;
    })
    .catch(() => {
      return null;
    });
  return response;
}
