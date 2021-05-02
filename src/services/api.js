import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default api;

//fazer uma função que pega os dados das apis, junta e retorna o necessário, um arquivo apiHooks com esta função
