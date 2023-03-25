import request from "@/util/request.js"
export function roles(data) {
    return request({ url: '/roles', params: data })
}
export function ql(data) {
    return request({ url: '/rights/tree ', params: data })
}
export function getrolist(data) {
    return request({ url: '/goods', params: data })
}

export function fpqx(roleId, data) {
    return request({
        url: `/roles/${roleId}/rights`,
        method: "post",
        data
    })

}
export function addros(data) {

    return request({
        url: "/roles",
        method: "post",
        data
    })

}
export function del(id) {
    return request({
        url: `/roles/${id}`,
        method: "delete",
    })

}
export function updat(id, data) {
    return request({
        url: `/roles/${id}`,
        method: "put",
        data
    })

}