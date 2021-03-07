<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-01-04 13:33:10
 * @LastEditors: Gin
 * @LastEditTime: 2021-01-25 11:39:27
-->
<template>
  <div>
    <SearchMoudel
      :search-list="searchList"
      :search-data="searchData"
      :search-attr="searchAttr"
      @setSecahData="setSecahData"
      @searchHandel="searchHandel"
      @refashion="refashion"
    />
    <slot />
    <TableMoudel
      ref="tableMoudel"
      :table-header-list="tableHeaderList"
      :table-handle-list="myTableHandleList"
      :table-attr="tableAttr"
      :table-data-list="tableDataList"
      :page="page"
    />
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      v-bind="paginationAttr"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import SearchMoudel from './SearchMoudel'
import TableMoudel from './TableMoudel'
import option from '@/config/option'
export default {
  name: 'TablePageTemplate',
  components: {
    SearchMoudel,
    TableMoudel
  },
  props: {
    // 页面配置项
    option: {
      type: Object,
      required: true,
      default: () => {}
    },
    // 搜索列表
    searchList: {
      type: Array,
      required: true,
      default: () => []
    },
    // 表头设置
    tableHeaderList: {
      type: Array,
      required: true,
      default: () => []
    },
    // 具体操作
    tableHandleList: {
      type: Array,
      required: true,
      default: () => []
    },
    // 异步接口方法
    // eslint-disable-next-line
    getDataSync: {
      tpye: Function,
      required: false
    }
  },
  data() {
    return {
      page: 1,
      limit: 10,
      total: 0, // 总条数
      searchData: {},
      tableDataList: []
    }
  },
  computed: {
    multipleSelection() {
      return this.$refs.tableMoudel.multipleSelection
    },
    // 处理配置项
    searchAttr() {
      return Object.assign({}, option.searchAttr, this.option.searchAttr)
    },
    tableAttr() {
      const defaultAttr = {
        style: 'width: 100%'
      }
      return Object.assign(defaultAttr, option.tableAttr, this.option.tableAttr)
    },
    paginationAttr() {
      const defaultAttr = {
        align: 'center',
        layout: 'total, sizes, prev, pager, next, jumper'
      }
      return Object.assign(defaultAttr, option.paginationAttr, this.option.paginationAttr)
    },
    myTableHandleList() {
      const list = this.tableHandleList.map(item => {
        item.btnAttr = Object.assign({
          size: 'small',
          type: 'primary'
        }, option.btnAttr, item.btnAttr)
        return item
      })
      return list
    }
  },
  created() {

  },
  mounted() {
    // 设置搜索框初始值
    this.searchList.forEach(item => {
      this.$set(this.searchData, item.model, item.value)
    })
    // 获取初始表单数据
    this.searchHandel()
  },
  methods: {
    /**
     * @name: 查询
     * @return {Void}
     */
    searchHandel() {
      this.page = 1
      this.getTableData()
    },
    // 改变分页每页显示数
    handleSizeChange(val) {
      this.limit = val
      this.searchHandel()
    },
    // 分页跳转
    handleCurrentChange(val) {
      this.page = val
      this.getTableData()
    },
    /**
     * @name: 获取表格数据
     * @return {Void}
     */
    getTableData() {
      const { limit, searchData, page } = this
      if (this.getDataSync) {
        this.getDataSync({
          ...searchData,
          limit,
          page
        }).then(res => {
          console.log(res)
          this.tableDataList = res.data.dataList
          this.total = res.data.total
        })
      } else {
        this.$emit('castData', {
          ...searchData,
          limit,
          page
        })
      }
    },
    /**
     * @name: 修改搜索值
     * @param {String} type    参数名
     * @param {String} data  参数值
     * @return {Void}
     */
    setSecahData(type, data) {
      this.$set(this.searchData, type, data)
    },
    /**
     * @name: 重置搜索值
     * @return {Void}
     */
    refashion() {
      for (const i in this.searchData) {
        this.searchData[i] = ''
      }
      this.searchHandel()
    },
    /**
   * @name: 设置当前表格数据与总数
   * @param {Object} data 表格数据
   * @param {Number} total 总数
   * @return {Void}
   */
    setTableData(data, total) {
      this.tableDataList = data
      console.log('this.tableDataList: ', this.tableDataList)
      this.total = total
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
