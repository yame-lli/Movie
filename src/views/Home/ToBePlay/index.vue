<template>
  <div class="tobe-play">
    <!-- 标题 -->
    <div class="tobe-play-header">
      <span class="tobe-play-title">即将上映({{toBePlayList.length}}部)</span>
      <a href="#" class="tobe-play-all">全部
        <el-icon :size="16">
          <ArrowRightBold />
        </el-icon>
      </a>
    </div>

    <!-- 内容 -->
    <div class="tobe-play-movie p-2 grid grid-cols-4 gap-12 justify-center">
      <div  v-for="item in toBePlayList.slice(0,8)" :key="item.id"  v-if="toBePlayList.length">
        <MovieCard class="tobe-play-movie-item  relative transform hover:scale-105" shadow="hover" :movieDetail="item">
          <template #info>
            <div class="  bg-gradient-to-t from-black absolute bottom-36px w-100% z-999 rounded-t-sm h-20%">
              <div class="flex justify-between items-center absolute bottom-0 w-100% px-2">
                <span class="text-white  font-medium">{{item.movieCName}}</span>
                <span class="text-orange-600 text-lg">{{item.movieScore}}</span>
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
import useStore from '@/store/index'
import {ref} from 'vue'


type MovieDetail = {
    id: number;
    movieCName: string;
    movieFName: string;
    movieActor: string;
    movieDirector: string;
    movieDetail: string;
    movieDuration: string;
    movieType: string;
    movieScore: number;
    movieBoxOffice: number;
    movieCommentCount: number;
    movieReleaseDate: string;
    movieCountry: string;
    moviePicture: string;
    movieState: number;
    commentList?: any;
    movieImg: string;
}
const {movieStore} = useStore()
const toBePlayList = ref<MovieDetail[]>([])
movieStore.reqToBePlayList().then(()=>{
  toBePlayList.value = movieStore.toBePlayList

})




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
