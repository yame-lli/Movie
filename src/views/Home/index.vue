<template>
  <div class="home">
    <!-- 轮播图 -->
    <swiper
      :modules="[Navigation, Pagination, Scrollbar, Autoplay]"
      :slides-per-view="1"
      :space-between="0"
      navigation
      loop:true
      :autoplay="{ delay: 3500, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
    </swiper>

    <!-- 正在热播 -->

    <div class="movie-info">
      <div class="movie-info-body">
        <hot-play></hot-play> <to-be-play></to-be-play>
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
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HotPlay from "./HotPlay/index.vue";
import ToBePlay from "./ToBePlay/index.vue";
import BoxOffice from "./BoxOffice/index.vue";
import HotCinema from "./HotCinema/index.vue";
import HotNews from "./HotNews/index.vue";

const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<style scoped>
.swiper {
  max-width: 1200px;
  height: 240px;
  margin: 20px auto;
  overflow: hidden;
}
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
</style>
