import request from "@/util/request.js"

export function loginByUserInfo(data) {

    return request({
        url: "/login",
        method: "post",
        data
    })

}

export function add(data) {

    return request({
        url: "/users",
        method: "post",
        data
    })

}

export function updat(id, data) {
    return request({
        url: `/users/${id}`,
        method: "put",
        data
    })

}
export function start(uid, data) {
    return request({
        url: `/users/${uid}/state/${data}`,
        method: "put",
        data
    })

}
export function del(id) {
    return request({
        url: `/users/${id}`,
        method: "delete",
    })

}
export function getHd(data) {
    return request({ url: '/', params: data })
}
export function getusers(data) {
    return request({ url: '/users', params: data })
}
export function getMenuList() {
    return request({
        url: "/menus"
    })

}