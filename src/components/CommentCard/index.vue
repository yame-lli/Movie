<template>
    <div class="mt-10">
        <div class="flex items-center">
            <el-avatar class="self-start" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <div class="flex-1 ml-4">
                <span class="text-gray-600">UserName</span>
                <div class="flex items-center">
                    <span class="text-gray-400 mr-4">8-19</span>
                    <el-rate v-model="value" disabled text-color="#ff9900" />
                </div>
            </div>
            <span>点赞</span>
        </div>

        <div class="text-gray-600 text-sm ml-14 pt-4 pb-8 border-b-1 border-gray-200">呜呜呜两个多小时都觉得太短了没看够呀 配角刻画的很讨喜 我居然很喜欢申公豹 场景中水墨画出现的时候真的好惊喜 这个中国元素加的太出彩了 剧情引人入胜 里面的市井气息和未来元素都融合的超棒
            总而言之看完杨戬感觉国漫真的是大跨步了 大荧幕上面丝毫不逊色</div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const value = ref(3.7)
</script>

<style scoped>

</style>