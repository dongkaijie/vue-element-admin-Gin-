<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-01-16 15:39:38
 * @LastEditors: Gin
 * @LastEditTime: 2021-01-25 10:47:16
-->
# TablePageTemplate 
整合mis端搜索框、表格与分页

## 优先级说明
默认值 < 全局配置 < 页面配置

## 全局文件配置说明
配置文件存放在src/config 目录下， 如有其他个性化表格页面，也要同时导入该配置，保证全局的样式统一，并以防后续修改产生一些欺骗性的问题，导致部分页面没有统一修改。
```
{
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
```

## 组件说明
### Attributes
|参数|说明|类型|可选值|默认值|
|:-|:-|:-|:-|:-|
| option | 对于整个页面的配置项，详情见下方`option`说明| Object | —— | —— |
| search-list | 搜索框列表，详情请查看`search-list`说明 | Array | —— | —— |
| table-header-list | 表头列表，支持[Elementui Table-column](https://element.eleme.cn/#/zh-CN/component/table) 所有可配置项，“操作栏”可默认不填写，如需自定义请给固定的prop值：`table__operation`,具体请查看`table__operation`说明 | Array | —— | —— |
| table-handle-list | 表格中操作栏的配置，详情请查看`table-handle-list`说明 | Array | —— | —— |
| get-data-sync | 获取表格数据的接口方法 | Function | —— | —— |

-----------

### option 参数说明
|参数|说明|类型|可选值|默认值|
|:-|:-|:-|:-|:-|
| searchAttr | 搜索框配置项，详情查看`searchAttr` 参数说明 | Object | —— | —— |
| tableAttr | 表格配置项配置项，支持[Elementui Table](https://element.eleme.cn/#/zh-CN/component/table) 所有可配置项,
 额外属性： `isSelection[boolean]` 是否开启表格多选， `showIndex[boolean]` 是否开启序号列表 | Object | —— | —— |
| paginationAttr | 分页配置项，支持[Elementui Pagination](https://element.eleme.cn/#/zh-CN/component/pagination) 所有可配置项 | Object | —— | —— |

-----------

### search-list 参数说明
|参数|说明|类型|可选值|默认值|
|:-|:-|:-|:-|:-|
| label | 输入框关联的label文字 | string | —— | —— |
| type | 输入框类型 | string | input/select | input |
| model | 与查询接口对应的字段名 | string | —— | —— |
| value | 输入框的默认值 | string/number | —— | —— |
| selectList | 仅当type为*select*时有效，下拉选项列表 | array | —— | —— |

-----------

### selectList 参数说明
|参数|说明|类型|可选值|默认值|
|:-|:-|:-|:-|:-|
| label | 显示的文字 | string | —— | —— |
| value | 对应的值 | string | —— | —— |

-----------

### searchAttr 参数说明
|参数|说明|类型|可选值|默认值|
|:-|:-|:-|:-|:-|
| lineNumber | 一行显示多少个搜索框，默认全部显示一行 | Number | —— | —— |

-----------

### table__operation 参数说明(操作栏在tableHeaderList中的prop标识，具有额外参数如下)
|参数|说明|类型|可选值|默认值|
|:-|:-|:-|:-|:-|
| isRow | 操作按钮是否分行显示 | boolean | —— | false |

-----------

### table-handle-list 参数说明
|参数|说明|类型|可选值|默认值|
|:-|:-|:-|:-|:-|
| btnAttr | 按钮配置项，支持[Elementui button](https://element.eleme.cn/#/zh-CN/component/button) 所有可配置项 size默认值small, type 默认值 primary | Object | —— | —— |
| label | 显示的文字 | string | —— | —— |
| handle | 具体的操作方法名，需手动绑定对应方法到组件上 | string | —— | —— |
| disabledRule | 禁用的逻辑判断，可直接传入布尔类型，也可传入行数据中对应的字段名，该字段为`true`时就禁用，也可传入*判断函数*，具有一个回调参数返回当前行的所有数据 | boolean/string/function | —— | —— |

-----------

### Events
|事件名称|说明|回调参数|
|:-|:-|:-|
| castData | 如果直接传入`get-data-sync`无法满足业务需求，可以使用该方法自定义接口实现 | 当前搜索栏与分页值的对象 |
| 自定义事件名 | 对应`tableHandleList`中`handle`字段 | 表单当前行数据对象 |

-----------

### Methods
|方法名|说明|参数|
|:-|:-|:-|
| setTableData | 设置当前表格数据与总数，配合`castData`使用 | tableData,total |

-----------
### Slot
|name|说明|
|:-|:-|
| —— | 搜索栏与表格间的区域，可添加更多功能按钮,通过 `ref` 获取 `multipleSelection` |

# 后续功能
1. 支持表格多选事件
2. 支持搜索栏时间类型的type
3. 支持操作栏开关类型的type