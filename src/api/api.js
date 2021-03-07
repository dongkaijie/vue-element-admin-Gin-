/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-01-18 11:07:16
 * @LastEditors: Gin
 * @LastEditTime: 2021-01-18 13:12:01
 */
import axios from './index'

export function fetchList(data) {
  return axios.request({
    url: '/rcbonestopController/secured/applicationInfo/query',
    method: 'post',
    data
  })
}

// 获取补贴类型
export function SubsidyTypeList(data) {
  return axios.request({
    url: '/rcbonestopController/secured/parameters/getSubsidyTypeList',
    method: 'get',
    data
  })
}
