import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({

    // add 'endpoint' for token to baseURL
    baseURL: '',
    headers: {
        Authorization: localStorage.getItem('token')
    }
    });
};