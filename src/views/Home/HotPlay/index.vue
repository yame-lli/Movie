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
        <template #info>
          <div style="padding: 6px" class="hidden">
            <span class="text-gray-600 text-xl">姜子牙</span>
            <div class="flex justify-between">
              <ul class="text-sm text-gray-400">
                <li>主演:XXX</li>
                <li>上映时间:xxx</li>
              </ul>
              <span class="text-orange-600 text-3xl">9.9</span>
            </div>
          </div>
        </template>

        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购票</span>
        </template>
      </MovieCard>
      <MovieCard class="hot-play-movie-item">
        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购票</span>
        </template>
      </MovieCard>
      <MovieCard class="hot-play-movie-item">
        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购票</span>
        </template>
      </MovieCard>
      <MovieCard class="hot-play-movie-item">
        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购票</span>
        </template>
      </MovieCard>
      <MovieCard class="hot-play-movie-item">
        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购票</span>
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
