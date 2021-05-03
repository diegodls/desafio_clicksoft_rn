import api from './api';

export async function loadApiUser(id) {
  const response = await api
    .get(`/users/${id}`)
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

export async function loadApiUsers() {
  const response = await api
    .get('/users')
    .then(res => {
      return res;
    })
    .catch(() => {
      return null;
    });
  return response;
}
