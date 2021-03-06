import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8090/app',
  headers: {
    Accept: 'application/json',
  },
});

http.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default http;
