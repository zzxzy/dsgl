import request from "c:/Users/Administrator/Desktop/杂物间/小兔子/src/util/request.js.js"

export function loginByUserInfo(data) {

    return request({
        url: "/login",
        method: "post",
        data
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