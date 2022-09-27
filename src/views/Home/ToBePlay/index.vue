<template>
  <div class="tobe-play">
    <!-- 标题 -->
    <div class="tobe-play-header">
      <span class="tobe-play-title">即将上映(69部)</span>
      <a href="#" class="tobe-play-all">全部
        <el-icon :size="16">
          <ArrowRightBold />
        </el-icon>
      </a>
    </div>

    <!-- 内容 -->
    <div class="tobe-play-movie p-2 grid grid-cols-4 gap-12 justify-center">
      <div>
        <MovieCard class="tobe-play-movie-item relative transform hover:scale-105 w-100%">

          <template #info>
            <div class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
              <div class="flex justify-between items-center absolute bottom-0 w-100% p-2">
                <span class="text-white  font-medium">姜子牙</span>

              </div>
            </div>
          </template>

          <template #bottom>
            <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">预 售</span>
          </template>

        </MovieCard>

        <div class="flex flex-col items-center p-2 group-hover:hidden">
          <span class=" pb-1 text-gray-400">9月30日上映</span>
        </div>

      </div>


      <div>
        <MovieCard class="tobe-play-movie-item relative transform hover:scale-105 w-100%">

          <template #info>
            <div class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
              <div class="flex justify-between items-center absolute bottom-0 w-100% p-2">
                <span class="text-white  font-medium">姜子牙</span>

              </div>
            </div>
          </template>

          <template #bottom>
            <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">预 售</span>
          </template>

        </MovieCard>

        <div class="flex flex-col items-center p-2 group-hover:hidden">
          <span class=" pb-1 text-gray-400">9月30日上映</span>
        </div>

      </div>
      <div>
        <MovieCard class="tobe-play-movie-item relative transform hover:scale-105 w-100%">

          <template #info>
            <div class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
              <div class="flex justify-between items-center absolute bottom-0 w-100% p-2">
                <span class="text-white  font-medium">姜子牙</span>

              </div>
            </div>
          </template>

          <template #bottom>
            <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">预 售</span>
          </template>

        </MovieCard>

        <div class="flex flex-col items-center p-2 group-hover:hidden">
          <span class=" pb-1 text-gray-400">9月30日上映</span>
        </div>

      </div>
      <div>
        <MovieCard class="tobe-play-movie-item relative transform hover:scale-105 w-100%">

          <template #info>
            <div class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
              <div class="flex justify-between items-center absolute bottom-0 w-100% p-2">
                <span class="text-white  font-medium">姜子牙</span>

              </div>
            </div>
          </template>

          <template #bottom>
            <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">预 售</span>
          </template>

        </MovieCard>

        <div class="flex flex-col items-center p-2 group-hover:hidden">
          <span class=" pb-1 text-gray-400">9月30日上映</span>
        </div>

      </div>
      <div>
        <MovieCard class="tobe-play-movie-item relative transform hover:scale-105 w-100%">

          <template #info>
            <div class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
              <div class="flex justify-between items-center absolute bottom-0 w-100% p-2">
                <span class="text-white  font-medium">姜子牙</span>

              </div>
            </div>
          </template>

          <template #bottom>
            <span class="block text-center color-red-500 p-2 hover:bg-red-600 hover:color-white">预 售</span>
          </template>

        </MovieCard>

        <div class="flex flex-col items-center p-2 group-hover:hidden">
          <span class=" pb-1 text-gray-400">9月30日上映</span>
        </div>

      </div>

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
}


</style>
