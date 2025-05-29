import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.gutendex.com/books'
});

export default api;