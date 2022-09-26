<template>
    <div class="flex justify-between items-center pb-8 border-b-dotted  border-b-1 border-gray-300">
        <div class="flex mt-6">
            <div class="flex flex-col">
                <span class="text-lg">1978电影城</span>
                <span class="text-gray-400 mt-2">地址：增城区增江街沿江东三路15号1978创意园B区1号</span>
                <div class="mt-3"><span class="border-1 mr-2 p-0.5 text-sm text-blue-400">改签</span><span
                        class="border-1  text-blue-400 p-0.5 text-sm">折扣卡</span></div>
            </div>
        </div>
        <div class="flex items-center">
            <div class="flex flex-col mr-4 items-center">
                <span class="text-red-500 text-lg">￥29.9</span>
                <span class="text-gray-300 text-sm">64km</span>
            </div>
            <el-button round color="#df2d2d" class="" @click="toCinemaDetail">点击购票</el-button>
        </div>
    </div>
</template>

<script setup lang='ts'>

import {useRouter} from 'vue-router'

const router = useRouter()
const toCinemaDetail = () =>{
    router.push({
        name:'CinemaDetail'
    })
}

</script>

<style scoped>

</style>