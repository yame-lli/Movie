<template>
    <div class="hot-play-list max-w-1200px mx-auto grid grid-cols-5 gap-15 justify-center">

        <div v-for="item in toBePlayList" :key="item.id" v-if="toBePlayList.length">

            <MovieCard class="hot-play-list-item group relative transform hover:scale-105" :movieDetail="item">
                <template #info>
                    <div style="padding: 6px"
                        class="hidden group-hover:block absolute -bottom-1px w-100%  z-999 bg-white rounded-t-sm">
                        <span class="text-gray-600 text-xl font-medium">{{ item.movieCName }}</span>
                        <div class="flex justify-between">
                            <ul class="text-sm text-gray-400 w-60%">
                                <li class="truncate">主演:{{ item.movieActor }}</li>
                                <li class="truncate  ">上映时间:{{ item.movieReleaseDate.slice(0, 10) }}</li>
                            </ul>
                            <span class="text-orange-600 text-3xl">{{ item.movieScore }}</span>
                        </div>
                    </div>
                </template>

            </MovieCard>

            <div class="flex flex-col items-center p-2 group-hover:hidden">
                <span class=" pb-1">{{ item.movieCName }}</span>
                <span class="text-orange-600 text-xl">{{ item.movieScore }}</span>
            </div>

        </div>



    </div>
</template>

<script setup lang='ts'>
import useStore from '@/store/index'
import { ref } from 'vue';


const { movieStore } = useStore()
let toBePlayList = ref<any[]>([])
movieStore.reqToBePlayList().then(() => {

    toBePlayList.value = movieStore.toBePlayList
})


</script>

<style scoped>
.hot-play-list-item {
    width: 100%;
}


.bottom {
    margin-top: 10px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>