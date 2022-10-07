import axios from 'axios'

const serve = axios.create({
    baseURL: '/api',
    timeout: 10000
})
serve.interceptors.request.use(function (config) {

    return config;
}, function (error) {

    return Promise.reject(error);
});


serve.interceptors.response.use(function (response) {

    return response.data;
}, function (error) {

    return Promise.reject(error);
});
export default serve