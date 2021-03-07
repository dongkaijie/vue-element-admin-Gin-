/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-23 09:44:24
 * @LastEditors: Gin
 * @LastEditTime: 2021-01-18 15:46:14
 */
import axios from 'axios'
import { baseURL } from '../config'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

const errMsaage = '连接异常,请联系管理员'
class HttpRequest {
  constructor() {
    this.baseURL = baseURL
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      withCredentials: true, // send cookies when cross-domain requests
      timeout: 100000, // request timeout
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=utf-8',
        'X-Token': getToken()
      }
    }
    return config
  }
  interceptors(instance) {
    instance.interceptors.request.use(config => {
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(
      response => {
        if (response.data.code === undefined) {
          return Promise.resolve(response.data)
        }
        if (response.data.code !== 200) {
          Message({
            message: response.data.msg,
            type: 'error'
          })
          return Promise.reject(response.data.reason)
        } else {
          return Promise.resolve(response.data)
        }
      },
      error => {
        console.log('err' + error) // for debug
        Message({
          message: error.response.data.message ? error.response.data.message : errMsaage,
          type: 'error'
        })
        return Promise.reject(error)
      }
    )
  }
  request(options) {
    const instance = axios.create()
    var potions = Object.assign(this.getInsideConfig(), options)

    this.interceptors(instance)
    return instance(potions)
  }
}
export default HttpRequest
