/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-23 09:26:08
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-23 17:44:24
 */
import axios from './index'

export function fetchList(query) {
  return axios.request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return axios.request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return axios.request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return axios.request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return axios.request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
