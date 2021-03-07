/*
 * @name: TablePageTemplate 的全局配置文件 默认值 < 全局配置 < 页面配置
 * @Author: Gin
 * @Date: 2021-01-18 15:59:17
 * @LastEditors: Gin
 * @LastEditTime: 2021-01-18 17:11:56
 */
const option = {
  // 搜索框的可配置项
  searchAttr: {
    lineNumber: 4 // 搜索栏一行展示的搜索框个数  默认为一行展示
  },
  // el表格 Attributes 的可配置项 支持所有el-table Attributes 默认值即为 el-table的默认值
  tableAttr: {
    stripe: true
  },
  // 分页的可配置项
  paginationAttr: {
    // layout: 'total, sizes, prev, pager, next, jumper', // 组件布局，子组件名用逗号分隔
    // align: 'center', // 页面对齐方式  默认值 center 可选值 left/center/right
    hideOnSinglePage: false // 只有一页时是否隐藏分页 默认值 false  可选值 true/false
  },
  // 操作栏按钮配置项  支持所有el-button Attributes
  btnAttr: {
    size: 'small', // 按钮大小  默认 small
    type: 'primary' // 按钮类型 默认 primary
  }
}

export default option
