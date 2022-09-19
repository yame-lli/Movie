<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script setup lang="ts">
import Header from "./components/Header/index.vue";
import Home from "./views/Home/index.vue"


import userStore from './store/index'

const use = userStore()

</script>

<style>
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 100px !important;
  text-align: center;
}
.el-menu--popup .el-menu-item{
  justify-content: center;
}
.home{
  max-width: 1200px;
  margin: 0 auto;
}
</style>
