<template>
  <Rank :title="title" :data="data"></Rank>
</template>

<script setup lang="ts">
import Rank from "@/components/Rank/index.vue";
import { ref } from "vue";

const title = ref<string>("热门资讯");

type hotNews = {
  rankName: string;
};

let data = ref<hotNews[]>([
  { rankName: "电影《忍者神龟：崛起》内地确认引进 经典IP全新动画升级回归" },
  { rankName: "电影《忍者神龟：崛起》内地确认引进 经典IP全新动画升级回归" },
  { rankName: "电影《忍者神龟：崛起》内地确认引进 经典IP全新动画升级回归" },
  { rankName: "电影《忍者神龟：崛起》内地确认引进 经典IP全新动画升级回归" },
  { rankName: "电影《忍者神龟：崛起》内地确认引进 经典IP全新动画升级回归" },
  { rankName: "电影《忍者神龟：崛起》内地确认引进 经典IP全新动画升级回归" },
]);
</script>

<style></style>
