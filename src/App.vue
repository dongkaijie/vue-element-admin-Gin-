<!--
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-23 09:26:08
 * @LastEditors: Gin
 * @LastEditTime: 2021-01-18 11:14:00
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
  #app{
    @include relative;
    color: $menuActiveText;

  }
</style>
