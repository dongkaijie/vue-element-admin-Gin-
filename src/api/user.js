/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-23 09:26:08
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-23 17:45:08
 */
import axios from './index'
export function login(data) {
  return axios.request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return axios.request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return axios.request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
