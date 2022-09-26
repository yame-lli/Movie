<template>
  <div class="hot-play">
    <!-- 标题 -->
    <div class="hot-play-header">
      <span class="hot-play-title">正在热映(69部)</span>
      <a href="#" class="hot-play-all">全部
        <el-icon :size="16">
          <ArrowRightBold />
        </el-icon>
      </a>
    </div>

    <!-- 内容 -->
    <div class="hot-play-movie">
      <MovieCard class="hot-play-movie-item">
        <template #bottom>
          <el-button class="button w-full ">购票</el-button>
        </template>
      </MovieCard>
     

    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightBold } from "@element-plus/icons-vue";
import MovieCard from "@/components/MovieCard/index.vue";
</script>

<style scoped>
.hot-play {
  width: 100%;
}

.hot-play-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px 0;
  overflow: hidden;
}

.hot-play-title {
  color: #f81515;
  font-weight: 700;
  font-size: 24px;
}

.hot-play-all {
  color: #f81515;
  font-size: 14px;
}

.hot-play-all .el-icon {
  vertical-align: text-bottom;
}

.hot-play-movie {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.hot-play-movie-item {
  width: 24%;
  box-sizing: border-box;
  margin-bottom: 20px;
}
</style>
