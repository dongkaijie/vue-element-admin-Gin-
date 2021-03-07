<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-01-04 14:08:02
 * @LastEditors: Gin
 * @LastEditTime: 2021-01-25 10:09:19
-->
<template>
  <div>
    <template v-for="(list, index) in mySearchList">
      <el-form
        :key="index"
        :inline="true"
        :model="formData"
        class="demo-form-inline"
      >
        <template v-for="item in list">
          <el-form-item :key="item.model" :label="item.label">
            <!-- 输入框 -->
            <el-input
              v-if="item.type === 'input' || !item.type"
              :value="searchData[item.model]"
              :placeholder="'请输入' + item.label"
              @input="$emit('setSecahData', item.model, $event)"
            />
            <!-- 选择框 -->
            <el-select
              v-if="item.type === 'select'"
              :value="searchData[item.model]"
              :placeholder="'请选择' + item.label"
              @input="$emit('setSecahData', item.model, $event)"
            >
              <el-option label="全部" value="" />
              <el-option
                v-for="selectItem in item.selectList"
                :key="selectItem.value"
                :label="selectItem.label"
                :value="selectItem.value"
              />
            </el-select>
            <!-- 日期选择 -->
            <el-date-picker
              v-if="item.type === 'daterange'"
              :value="searchData[item.model]"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
              @input="$emit('setSecahData', item.model, $event)"
            />
          </el-form-item>
        </template>
        <el-form-item v-if="index == mySearchList.length - 1">
          <el-button type="primary" @click="onSubmit">
            查询
          </el-button>
          <el-button type="primary" @click="$emit('refashion')">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SearchMoudel',
  props: {
    searchAttr: {
      type: Object,
      default: () => {}
    },
    searchList: {
      type: Array,
      default: () => []
    },
    searchData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      formData: {}
    }
  },
  computed: {
    mySearchList() {
      let list = []
      const searchList = this.searchList

      if (this.searchAttr.lineNumber) {
        const number = this.searchAttr.lineNumber // 一行放几个
        for (var i = 0, len = searchList.length; i < len; i += number) {
          list.push(searchList.slice(i, i + number))
        }
      } else {
        list = [searchList]
      }
      console.log('list: ', list)
      return list
    }
  },

  created() {
    this.searchList.forEach((item) => {
      this.$set(this.formData, item.model, item.value)
    })
  },
  mounted() {},
  methods: {
    onSubmit() {
      this.$emit('searchHandel', this.formData)
    },
    log(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped></style>
