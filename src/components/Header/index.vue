<template>
  <!-- 头部 -->
  <div class="header overflow-hidden">
    <!-- nav -->
    <el-menu :default-active="activeIndex" class="nav" mode="horizontal" :ellipsis="false" @select="handleSelect">
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1" @click="toHome">首页</el-menu-item>
      <el-menu-item index="2" @click="toMovie">电影</el-menu-item>
      <el-menu-item index="3" @click="toCinema">影院</el-menu-item>
      <el-menu-item index="4" @click="toNews">资讯</el-menu-item>

      <!-- 搜索 -->
      <el-input v-model="input2" class="search" placeholder="Please Input" :suffix-icon="Search" type="text" />

      <!-- 头像 -->
      <el-sub-menu index="6" class="avatar">
        <template #title>
          <div>
            <el-avatar :src="`data:image/jpg;base64,`+ user.avatar" />
          </div>
        </template>
        <el-menu-item index="6-1" v-if="Object.keys(user).length==0">登录/注册</el-menu-item>
        <el-menu-item index="6-2">个人中心</el-menu-item>
        <el-menu-item index="6-3">退出登录</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref,toRaw } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
import useStore from '@/store/index'

const { userStore } = useStore()

const user:any = toRaw (userStore.user)







const activeIndex = ref("1");
const input2 = ref("");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const router = useRouter()
const route = useRoute()
const toMovie = () => {
  router.push({
    name: 'Movie'
  })
}

const toHome = () => {
  router.push({
    name: 'Home'
  })
}
const toCinema = () => {
  router.push({
    name: 'Cinema'
  })
}
const toNews = () => {
  router.push({
    name: 'News'
  })
}

</script>

<style scoped>
.header {

  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  height: 74px;
  position: fixed;
  background-color: white;
  z-index: 999;
}

.flex-grow {
  flex-grow: 1;
}

.demo-type {
  display: flex;
}

.demo-type>div {
  flex: 1;
  text-align: center;
}

.demo-type>div:not(:last-child) {
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
  max-width: 1200px;
  margin: 0 auto;
}

.el-sub-menu {
  height: 100%;
}

.search {
  margin: 0 50px;
}
</style>
