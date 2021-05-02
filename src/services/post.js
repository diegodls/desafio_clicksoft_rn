import api from './api';

export function loadApiPost(id) {
  return new Promise(response => {
    response(api.get(`/posts/${id}`));
  });
}

export function loadApiPosts() {
  return new Promise(response => {
    response(api.get('/posts'));
  });
}
