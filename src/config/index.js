/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-11-19 13:24:16
 */
export const baseURL = process.env.NODE_ENV === 'production' ?
  window._CONFIG['baseUrl'] : // 生产环境下请求url的地址
  'dev-api' // 开发环境
