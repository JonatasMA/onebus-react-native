import axios from 'axios';

const api = axios.create({
    baseURL: 'https://onebus-10ae7.firebaseio.com',
});

export default api;