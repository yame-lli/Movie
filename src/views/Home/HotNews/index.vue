<template>
  <Rank :title="title" :data="data"></Rank>
</template>

<script setup lang="ts">
import Rank from "@/components/Rank/index.vue";
import { ref } from "vue";
import useStore from '@/store/index'
const title = ref<string>("热门资讯");

type hotNews = {
  rankName: string;
};

let data = ref<hotNews[]>([]);

const { newsStore } = useStore()
newsStore.reqGetHotNewsList().then(() => {
  newsStore.newsList.slice(0, 5).forEach((item) => {
    data.value.push({ rankName: item.consultTitle })
  })
})



</script>

<style>
</style>
