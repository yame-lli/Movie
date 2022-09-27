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
    <div class="hot-play-movie p-2 grid grid-cols-4 gap-12 justify-center">
      <MovieCard class="hot-play-movie-item  relative transform hover:scale-105" shadow="hover">
        <template #info>
          <div  class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
            <div class="flex justify-between items-center absolute bottom-0 w-100% px-2">
              <span class="text-white  font-medium">姜子牙</span>
              <span class="text-orange-600 text-lg">9.9</span>
            </div>
          </div>
        </template>

        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购 票</span>
        </template>
      </MovieCard>
      
      <MovieCard class="hot-play-movie-item  relative transform hover:scale-105" shadow="hover">
        <template #info>
          <div  class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
            <div class="flex justify-between items-center absolute bottom-0 w-100% px-2">
              <span class="text-white  font-medium">姜子牙</span>
              <span class="text-orange-600 text-lg">9.9</span>
            </div>
          </div>
        </template>

        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购 票</span>
        </template>
      </MovieCard>
      <MovieCard class="hot-play-movie-item  relative transform hover:scale-105" shadow="hover">
        <template #info>
          <div  class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
            <div class="flex justify-between items-center absolute bottom-0 w-100% px-2">
              <span class="text-white  font-medium">姜子牙</span>
              <span class="text-orange-600 text-lg">9.9</span>
            </div>
          </div>
        </template>

        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购 票</span>
        </template>
      </MovieCard>
      <MovieCard class="hot-play-movie-item  relative transform hover:scale-105" shadow="hover">
        <template #info>
          <div  class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
            <div class="flex justify-between items-center absolute bottom-0 w-100% px-2">
              <span class="text-white  font-medium">姜子牙</span>
              <span class="text-orange-600 text-lg">9.9</span>
            </div>
          </div>
        </template>

        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购 票</span>
        </template>
      </MovieCard>
      <MovieCard class="hot-play-movie-item  relative transform hover:scale-105" shadow="hover">
        <template #info>
          <div  class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
            <div class="flex justify-between items-center absolute bottom-0 w-100% px-2">
              <span class="text-white  font-medium">姜子牙</span>
              <span class="text-orange-600 text-lg">9.9</span>
            </div>
          </div>
        </template>

        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购 票</span>
        </template>
      </MovieCard>
      <MovieCard class="hot-play-movie-item  relative transform hover:scale-105" shadow="hover">
        <template #info>
          <div  class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
            <div class="flex justify-between items-center absolute bottom-0 w-100% px-2">
              <span class="text-white  font-medium">姜子牙</span>
              <span class="text-orange-600 text-lg">9.9</span>
            </div>
          </div>
        </template>

        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购 票</span>
        </template>
      </MovieCard>
      <MovieCard class="hot-play-movie-item  relative transform hover:scale-105" shadow="hover">
        <template #info>
          <div  class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
            <div class="flex justify-between items-center absolute bottom-0 w-100% px-2">
              <span class="text-white  font-medium">姜子牙</span>
              <span class="text-orange-600 text-lg">9.9</span>
            </div>
          </div>
        </template>

        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购 票</span>
        </template>
      </MovieCard>
      <MovieCard class="hot-play-movie-item  relative transform hover:scale-105" shadow="hover">
        <template #info>
          <div  class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
            <div class="flex justify-between items-center absolute bottom-0 w-100% px-2">
              <span class="text-white  font-medium">姜子牙</span>
              <span class="text-orange-600 text-lg">9.9</span>
            </div>
          </div>
        </template>

        <template #bottom>
          <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">购 票</span>
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




</style>
