<template>
    <div class="h-375px" :style="`background-image:url(${bg})`">
        <div class="h-375px flex justify-center">
            <div class="mt-80px"><img class="w-232px h-322px border-4 border-white"
                    src="https://p0.pipi.cn/mmdb/d2dad5927a30fa8d33b8605f671206f584437.jpg?imageView2/1/w/464/h/644"
                    alt="">
            </div>

            <div class="mt-80px ml-10 text-white flex flex-col">
                <div class="flex flex-col mb-4">
                    <span class="text-3xl">无名</span> <span class="text-xl">NoName</span>
                </div>
                <div class=" flex flex-col mb-4"><span class="text-sm">喜剧 剧情</span><span class="text-sm">中国大陆 /
                        111分钟</span><span class="text-sm">2022-09-09 12:00中国大陆上映</span></div>
                <div class=" flex flex-col flex-1 justify-center ">
                    <el-button color=" white" round class="mb-4 w-40">评分</el-button>
                    <el-button color=" #df2d2d" round class="w-40">购票</el-button>
                </div>
            </div>

            <div class="mt-auto ml-10 mb-8 text-white">
                <div class="mb-4">
                    <span class="text-sm">评分</span>
                    <div><span class="text-3xl text-yellow-500 mr-4">9.1</span>
                        <el-rate v-model="value" disabled text-color="#ff9900" />
                    </div>
                </div>
                <div class="flex flex-col">
                    <span class="text-sm">累计票房</span>
                    <span class="text-2xl">2.72 <span class="text-sm">亿</span></span>
                </div>
            </div>


        </div>
    </div>

    <div class="max-w-800px mx-auto mt-18">
        <el-menu :default-active="activeIndex" class="el-menu-demo mb-4" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" class="text-base leading-12">介绍</el-menu-item>
            <el-menu-item index="2" class="text-base leading-12">演员</el-menu-item>
        </el-menu>

        <div class="flex flex-col mb-10">
            <span class="border-l-4 border-red-500 pl-2 text-lg text-gray-600 mt-8">剧情简介</span>
            <div class="text-sm text-gray-500 p-4">
                《老师好》导演张栾最新催泪喜剧！马丽魏翔再续《这个杀手不太冷静》前缘，常远化身红娘儿子，助攻父母爱情！ 与父亲老伍（魏翔 饰）终年不合的小伍（常远 饰）阴差阳错回到80年代，意外搅黄了父亲与母亲大陆（马丽
                饰）的初次相遇。为了纠正这个错误，他想尽办法一次次重返过去，鼓励老妈追老爸，让人啼笑皆非的闹剧不断上演。父母相遇相恋的命运，是否会因为小伍的干预而转变？尘封在父亲心里的秘密，又将如何慢慢揭开……
            </div>
        </div>

        <div>
            <span class="border-l-4 border-red-500 pl-2 text-lg text-gray-600 mt-4">演职人员</span>
            <div class="flex flex-col text-gray-500 p-4">
                <span class="mb-4">导演：<span>XXX</span></span>
                <span class="">演员：<span>XXX XXX</span></span>
            </div>

        </div>

        <div class="mt-10 flex justify-between items-center">
            <span class="border-l-4 border-red-500 pl-2 text-lg text-gray-600 ">热门短评</span>

            <el-button round>写短评</el-button>
        </div>

        <div class="w-80% mx-auto flex mt-6 items-center ">
            <el-input v-model="textarea2" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" class="block text-xl"
                placeholder="Please input">
                
            </el-input>
            <el-button class="ml-4" type="primary">发送</el-button>
        </div>
        <CommentCard></CommentCard>
        <CommentCard></CommentCard>
        <CommentCard></CommentCard>
        <CommentCard></CommentCard>
        <CommentCard></CommentCard>
        <CommentCard></CommentCard>

    </div>
</template>

<script setup lang='ts'>
import bg from '@/assets/banner.png'

import { ref } from 'vue'
import CommentCard from '@/components/CommentCard/index.vue';

const value = ref(3.7)
const textarea2 = ref(3.7)


const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
.el-button+.el-button {
    margin: 0
}

.el-textarea {
    @apply text-lg
}
</style>