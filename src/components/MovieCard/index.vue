<template>
  <el-card shadow="hover"  :body-style="{ padding: '0px' }" @click="toMovieDetail">
    <img src="https://p0.pipi.cn/mmdb/25bfd633807c7e11e539dd4f7b2672dcc27d1.jpg?imageView2/1/w/464/h/644"
      class="image " />

    <slot name="info"></slot>

    <slot name="bottom"></slot>


  </el-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const toMovieDetail = () => {
  router.push({
    name: 'MovieDetail'
  })
}


</script>

<style scoped>
.el-card {
  box-sizing: border-box;
  @apply duration-50 transition 
}

.image {
  width: 100%;
  display: block;
}
</style>
