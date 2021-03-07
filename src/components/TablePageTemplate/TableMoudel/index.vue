<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-01-04 13:33:10
 * @LastEditors: Gin
 * @LastEditTime: 2021-01-25 10:47:49
-->
<template>
  <div class="tableMoudel">
    <el-table
      :data="tableDataList"
      v-bind="tableAttr"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="tableAttr.isSelection"
        type="selection"
        width="55"
      />
      <!-- 序号 -->
      <el-table-column
        v-if="tableAttr.showIndex"
        label="序号"
        type="index"
        :index="
          index => {
            return index + 1 + (page - 1) * 10;
          }
        "
        width="50"
        align="center"
      />
      <template v-for="item in tableNameList">
        <el-table-column
          v-if="item.prop !== 'table__operation'"
          :key="item.prop"
          v-bind="item"
        />
        <el-table-column v-else :key="item.label" v-bind="item">
          <template slot-scope="scope">
            <el-button
              v-for="btn in tableHandleList"
              :key="btn.label"
              v-bind="btn.btnAttr"
              :disabled="disabledRule(btn.disabledRule, scope.row)"
              :class="item.isRow ? 'isRow' : ''"
              @click="
                () => {
                  $parent.$emit(btn.handle, scope.row)
                }
              "
            >
              <!-- @click="handleClick(scope.row)" -->

              {{ btn.label }}
            </el-button>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableMoudel',
  props: {
    // table column的参数配置
    tableHeaderList: {
      type: Array,
      required: true,
      default: () => []
    },
    // table数据
    tableDataList: {
      type: Array,
      required: true,
      default: () => []
    },
    // table的属性
    tableAttr: {
      type: Object,
      default: () => {}
    },
    // 操作配置
    tableHandleList: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 当前第几页
    page: {
      type: Number,
      default: () => 1
    }
  },
  data() {
    return {
      multipleSelection: []
    }
  },
  computed: {
    tableNameList() {
      const list = [...this.tableHeaderList]
      // 没有定义 操作head 时 自动添加
      const hasHandle = list.find((item) => item.label === '操作')
      if (this.tableHandleList.length > 0 && !hasHandle) {
        list.push({
          label: '操作'
        })
      }
      return list
    }
  },
  created() {},
  mounted() {},
  methods: {
    /**
     * @name: 多选
     */
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    /**
     * @name: 判断是否禁用操作按钮
     * @param { Function | boolean | string } disabledRule 页面自定义的判断函数 或 是否禁用 或 只要当前行某个属性为true就禁用
     * @param {*} row 当前行数据
     * @return {*}
     */
    disabledRule(disabledRule, row) {
      if (disabledRule === undefined) return false
      if (typeof disabledRule === 'boolean') {
        return disabledRule
      } else if (typeof disabledRule === 'string') {
        return row[disabledRule]
      } else if (typeof disabledRule === 'function') {
        return disabledRule(row)
      } else {
        console.error(
          'disabledRule 禁用方法只能传入boolean、string、function类型，请仔细查阅使用手册'
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.isRow {
  display: block;
  margin: 0 0 8px 0 !important;
}

.tableMoudel {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
