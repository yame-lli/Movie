<template>
  <div class="box-office">
    <Rank :data="data" :title="title">
      <template #detail="scope">
        <span class="rank-detail" >{{scope.rankDetail}}</span>
      </template>
    </Rank>
  </div>
</template>

<script setup lang="ts">
import Rank from "@/components/Rank/index.vue";
import { ref } from "vue";
type boxOffice = {
  rankName: string;
  rankDetail: string;
};

let data = ref<boxOffice[]>();
const title = ref<string>("今日票房");

data.value = [
  {
    rankName: "隐入尘世",
    rankDetail: "123.33万",
  },
  {
    rankName: "隐入尘世",
    rankDetail: "123.33万",
  },
  {
    rankName: "隐入尘世",
    rankDetail: "123.33万",
  },
  {
    rankName: "隐入尘世",
    rankDetail: "123.33万",
  },
  {
    rankName: "隐入尘世",
    rankDetail: "123.33万",
  },
];
</script>

<style scoped>
.rank-detail {
  font-size: 14px;
  color: #f81515;
  flex: 1;
  text-align: end;
}
</style>
