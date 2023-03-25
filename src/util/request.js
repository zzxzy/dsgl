import axios from "axios";

const service = axios.create({
    baseURL: process.env.VUE_APP_baseURL,
    timeout: 5000
})

service.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        config.headers['Authorization'] = localStorage.getItem('token')
    }
    return config;
}, error => {
    return Promise.reject(error);
})


service.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status) {
        switch (error.response.status) {
            case 404:
                alert("资源不存在");
                break;
            case 400:
                alert("请求的地址不存在或者包含不支持的参数");
                break;
            case 401:
                alert("你还没有登录");
                break;
            case 403:
                alert("token过期了");
                break;
            default:
                alert("error");
        }
        return Promise.reject(error)

    }


})


// 封装get post 的方法
export function get(url, data = {}) {
    return new Promise((resolve, reject) => {
        service({
            url: url,
            method: 'get',
            params: data
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })

    })
}
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        service({
            url: url,
            method: 'put',
            data: data
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })

    })
}
//post请求
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        service({
            url: url,
            method: 'post',
            data: data
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export default service;