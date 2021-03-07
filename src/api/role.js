/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-23 09:26:08
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-23 17:44:50
 */
import axios from './index'

export function getRoutes() {
  return axios.request({
    url: '/vue-element-admin/routes',
    method: 'get'
  })
}

export function getRoles() {
  return axios.request({
    url: '/vue-element-admin/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return axios.request({
    url: '/vue-element-admin/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return axios.request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return axios.request({
    url: `/vue-element-admin/role/${id}`,
    method: 'delete'
  })
}
