<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-01-04 13:31:46
 * @LastEditors: Gin
 * @LastEditTime: 2021-01-18 17:38:58
-->
<template>
  <div class="app-container">
    <temp
      ref="temp"
      :option="option"
      :search-list="searchList"
      :table-header-list="tableHeaderList"
      :table-handle-list="tableHandleList"
      @readHandle="readHandle"
      @deleteHandle="delHandle"
      @defineHandle="defineHandle"
      @castData="castData"
    />
  </div>
</template>

<script>
import { fetchList, SubsidyTypeList } from '@/api/api'
// import { transactionList } from '@/api/remote-search'
import temp from '@/components/TablePageTemplate'
export default {
  name: 'Content',
  components: {
    temp
  },
  props: {},
  data() {
    return {
      option: {
        // 搜索框的可配置项
        searchAttr: {
          // lineNumber: 3 // 搜索栏一行展示的搜索框个数  默认为一行展示
        },
        // el表格 Attributes 的可配置项 支持所有el-table Attributes 默认值即为 el-table的默认值
        tableAttr: {},
        // 分页的可配置项
        paginationAttr: {
          // layout: 'total, sizes, prev, pager, next, jumper', // 组件布局，子组件名用逗号分隔
          // align: 'center', // 页面对齐方式  默认值 center 可选值 left/center/right
          // hideOnSinglePage: false // 只有一页时是否隐藏分页 默认值 false  可选值 true/false
        }

      },
      // 搜索列表
      searchList: [
        {
          label: '人员姓名',
          // type: 'input',
          model: 'personName', // 绑定字段
          value: '' // 默认值
        },
        {
          label: '身份证号',
          type: 'input',
          model: 'personIdCard', // 绑定字段
          value: '' // 默认值
        },
        {
          label: '企业名称',
          type: 'input',
          model: 'enterpriseName', // 绑定字段
          value: '' // 默认值
        },
        // {
        //   label: '补贴类型',
        //   type: 'select',
        //   selectList: [
        //     {
        //       label: '区域一',
        //       value: 'shanghai'
        //     },
        //     {
        //       label: '区域二',
        //       value: 'beijing'
        //     }
        //   ],
        //   model: 'subsidyTypeName', // 绑定字段
        //   value: '' // 默认值
        // },
        {
          label: '发放状态',
          type: 'select',
          selectList: [
            {
              label: '区域一',
              value: 'shanghai'
            },
            {
              label: '区域二',
              value: 'beijing'
            }
          ],
          model: 'grantStatus', // 绑定字段
          value: '' // 默认值
        },
        {
          label: '申请状态',
          type: 'select',
          selectList: [
            {
              label: '区域一',
              value: 'shanghai'
            },
            {
              label: '区域二',
              value: 'beijing'
            }
          ],
          model: 'applyStatus', // 绑定字段
          value: '' // 默认值
        }
      ],
      // 表头设置
      tableHeaderList: [
        {
          prop: 'personName',
          align: 'center',
          label: '姓名'
        },
        {
          prop: 'personIdCard',
          label: '身份证号'
        },
        {
          prop: 'enterpriseName',
          label: '企业名称'
        },
        {
          prop: 'subsidyTypeName',
          label: '补贴类型'
        },
        {
          prop: 'amount',
          label: '补贴金额'
        },
        {
          prop: 'applyStatus',
          label: '申请状态'
        },
        {
          prop: 'grantBatchCount',
          label: '总发放批次'
        },
        {
          prop: 'issuedGrantCount',
          label: '当前已发放'
        },
        {
          prop: 'grantStatusName',
          label: '发放状态'
        },
        {
          prop: 'table__operation',
          label: '操作',
          isRow: true
        }
      ],
      // 具体操作
      tableHandleList: [
        {
          // 操作栏按钮配置项  支持所有el-button Attributes
          btnAttr: {
            type: 'text',
            size: 'medium'
          },
          label: '查看',
          disabledRule: true,
          handle: 'readHandle'
        },
        {
          btnAttr: {
            type: 'primary',
            size: 'small'
          },
          label: '删除',
          disabledRule: (row) => {
            if (row.grantStatus === 1) {
              return true
            }
          },
          handle: 'deleteHandle'
        },
        {

          btnAttr: {
            // type: 'primary'
            // size: 'mini'
          },
          label: '自定义', // 显示的名字
          handle: 'defineHandle' // 自定义函数名称
        }
      ],
      // 异步接口方法
      getTableData: fetchList

    }
  },
  created() {
    SubsidyTypeList().then(res => {
      console.log('res: ', res)
      const searchList = this.searchList
      const item = {
        type: 'select',
        label: '补贴类型',
        model: 'subsidyTypeName', // 绑定字段
        selectList: []
      }
      res.data.forEach(li => {
        item.selectList.push({
          label: li.systemName,
          value: li.id
        })
      })
      searchList.splice(3, 0, item)
      console.log('searchList: ', searchList)
    })
    setTimeout(() => {
      // this.tableHandleList[]
    }, 3000)
  },
  mounted() {},
  methods: {
    castData(data) {
      console.log(data)
      fetchList(data).then(res => {
        this.$refs.temp.setTableData(res.data.dataList, res.data.total)
        // this.total = res.data.total
      })
    },
    readHandle(row) {
      console.log('read')
      console.log(row)
    },
    delHandle(row) {
      console.log('del')
      console.log(row)
    },
    defineHandle(row) {
      console.log('defineHandle')
      console.log(row)
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
