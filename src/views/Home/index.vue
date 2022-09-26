<template>
   <Header></Header>
  <div class="home">
    <!-- 轮播图 -->
    <el-carousel trigger="click" height="300px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="w-full" src="@/assets/313649.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
    <!-- 正在热播 -->

    <div class="movie-info mt-10">
      <div class="movie-info-body">
        <hot-play></hot-play>
        <to-be-play></to-be-play>
      </div>
      <div class="movie-info-aside">
        <BoxOffice class="movie-info-aside-item"></BoxOffice>
        <HotCinema class="movie-info-aside-item"></HotCinema>
        <HotNews class="movie-info-aside-item"></HotNews>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import HotPlay from "./HotPlay/index.vue";
import ToBePlay from "./ToBePlay/index.vue";
import BoxOffice from "./BoxOffice/index.vue";
import HotCinema from "./HotCinema/index.vue";
import HotNews from "./HotNews/index.vue";
import Header from "@/components/Header/index.vue";

</script>

<style scoped>
.movie-info {
  width: 100%;
}

.movie-info-body {
  max-width: 68%;
  float: left;
  display: flex;
  flex-direction: column;
}

.movie-info-aside {
  float: right;
  width: 32%;
  display: flex;
  flex-direction: column;
}

.movie-info-aside-item {
  height: 400px;
  margin: 0 0 80px 70px;
}

.swiper-button-next {
  color: white;
}
</style>
