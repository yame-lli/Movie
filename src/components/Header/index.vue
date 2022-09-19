<template>
  <!-- 头部 -->
  <div class="header">
    <!-- nav -->
    <el-menu
      :default-active="activeIndex"
      class="nav"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">电影</el-menu-item>
      <el-menu-item index="3">影院</el-menu-item>
      <el-menu-item index="4">资讯</el-menu-item>

      <!-- 搜索 -->

      <el-input
        v-model="input2"
        class="search"
        placeholder="Please Input"
        :suffix-icon="Search"
        type="text"
      />

      <!-- 头像 -->
      <el-sub-menu index="6" class="avatar">
        <template #title>
          <div>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            /></div
        ></template>
        <el-menu-item index="6-1">登录/注册</el-menu-item>
        <el-menu-item index="6-2"></el-menu-item>
        <el-menu-item index="6-3">3</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UserFilled, Search } from "@element-plus/icons-vue";

const activeIndex = ref("1");
const input2 = ref("");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.header {
  max-width: 1200px;
  margin: 0 auto;
  height: 74px;
}
.flex-grow {
  flex-grow: 1;
}
.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
.el-input {
  width: 20%;
  height: 50%;
}

.avatar .el-avatar {
  vertical-align: middle;
}

.el-menu {
  align-items: center;
  height: 100%;
}
.el-sub-menu{
  height: 100%;
}

.search {
  margin: 0 50px;
}
</style>
