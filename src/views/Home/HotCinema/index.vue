<template>
  <div class="hot-cinema">
    <Rank :title="title" :data="data">
      <template #detail="scope">
        <el-rate
          v-model="scope.rankDetail"
          disabled
          
          text-color="#ff9900"
        />
      </template>
    </Rank>
  </div>
</template>

<script setup lang="ts">
import Rank from "@/components/Rank/index.vue";
import { ref } from "vue";

type hotCinema = {
  rankName: string;
  rankDetail: string;
};

let data = ref<hotCinema[]>();
const title = ref<string>("热门影院");

data.value = [
  {
    rankName: "大地影院",
    rankDetail: "5",
  },
  {
    rankName: "大地影院",
    rankDetail: "4",
  },
  {
    rankName: "大地影院",
    rankDetail: "3",
  },
  {
    rankName: "大地影院",
    rankDetail: "2",
  },
  {
    rankName: "大地影院",
    rankDetail: "1.5",
  },
];
</script>

<style scoped>
.el-rate{
    margin-left: auto;
}

</style>
