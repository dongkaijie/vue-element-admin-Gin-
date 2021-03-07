/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-23 09:26:08
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-23 17:42:00
 */
import axios from './index'

export function searchUser(name) {
  return axios.request({
    url: '/vue-element-admin/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return axios.request({
    url: '/vue-element-admin/transaction/list',
    method: 'get',
    params: query
  })
}
