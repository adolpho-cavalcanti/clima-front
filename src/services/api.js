import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://previsao-tempo-acn.herokuapp.com'
})