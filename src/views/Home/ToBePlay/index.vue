<template>
  <div class="tobe-play">
    <!-- 标题 -->
    <div class="tobe-play-header">
      <span class="tobe-play-title">即将上映(69部)</span>
      <a href="#" class="tobe-play-all"
        >全部
        <el-icon :size="16"><ArrowRightBold /></el-icon>
      </a>
    </div>

    <!-- 内容 -->
    <div class="tobe-play-movie">
      <MovieCard class="tobe-play-movie-item"></MovieCard>
      <MovieCard class="tobe-play-movie-item"></MovieCard>
      <MovieCard class="tobe-play-movie-item"></MovieCard>
      <MovieCard class="tobe-play-movie-item"></MovieCard>
      <MovieCard class="tobe-play-movie-item"></MovieCard>
      <MovieCard class="tobe-play-movie-item"></MovieCard>
      <MovieCard class="tobe-play-movie-item"></MovieCard>
      <MovieCard class="tobe-play-movie-item"></MovieCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightBold } from "@element-plus/icons-vue";
import MovieCard from "@/components/MovieCard/index.vue";
</script>

<style>
.tobe-play {
  width: 100%;
}
.tobe-play-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px 0;
  overflow: hidden;
}
.tobe-play-title {
  color: #379bff;
  font-weight: 700;
  font-size: 24px;
}
.tobe-play-all {
  color: #379bff;
  font-size: 14px;
}
.tobe-play-all .el-icon {
  vertical-align: text-bottom;
}
.tobe-play-movie {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.tobe-play-movie-item {
  width: 24%;
  box-sizing: border-box;
  margin-bottom: 20px;
}
</style>
