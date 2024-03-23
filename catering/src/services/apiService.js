import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3000', // Cambia la URL según la ubicación de tu API Node.js
});

export default apiService;
