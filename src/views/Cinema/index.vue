<template>
    <div class="max-w-1200px mx-auto">
        <div class=" ">
            <span class="text-xl font-medium border-l-4 border-red-600	 pl-2 mt-8 block">影院列表</span>
        </div>

        <CinemaCard v-if="cinemaList" v-for="item in cinemaList" :key="item.id" :cinema = "item"></CinemaCard>

    </div>
</template>

<script setup lang='ts'>
import CinemaCard from './CinemaCard/index.vue';
import useStore from '@/store/index'
import {ref} from 'vue'


const { cinemaStore } = useStore()
let cinemaList = ref()
cinemaStore.reqGetCinemaList().then(()=>{
    cinemaList.value =  cinemaStore.cinemaList
})


</script>

<style scoped>

</style>