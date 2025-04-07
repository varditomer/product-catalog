// src/services/http.service.js
import Axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3000/api/';

const axios = Axios.create({
    withCredentials: true
});

// Add a request interceptor to include the token
axios.interceptors.request.use(config => {
    // In client-side code, we need to check if window is defined
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

export const httpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data);
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data);
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data);
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data);
    }
};

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null
        });
        return res.data;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`, data);
        console.dir(err);
        if (err.response && err.response.status === 401) {
            // Only clear session and redirect in browser environment
            if (typeof window !== 'undefined') {
                sessionStorage.clear();
                window.location.assign('/');
            }
        }
        throw err;
    }
}

export default httpService;
