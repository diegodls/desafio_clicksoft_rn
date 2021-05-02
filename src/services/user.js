import api from './api';

export function loadApiUser(id) {
  return new Promise(response => {
    response(api.get(`/users/${id}`));
  }).catch();
}

export function loadApiUsers() {
  return new Promise(response => {
    response(api.get('/users'));
  }).catch();
}
