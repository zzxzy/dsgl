import request from "@/util/request.js"

export function getcatelist(data) {
    return request({ url: '/categories', params: data })
}