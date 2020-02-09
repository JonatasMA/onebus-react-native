import axios from 'axios';

const api = axios.create({
    baseURL: 'https://onebus-10ae7.firebaseio.com',
    // baseURL: 'http://192.168.1.5:3333',
});

export default api;