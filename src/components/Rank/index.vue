<template>
  <div class="rank">
    <div class="rank-title">{{title}}</div>
    <ul class="rank-info">
      <li v-for="(item,index) in data" :key="index">
        <span class="rank-num">{{index+1}}</span>
        <span class="rank-name">{{item.rankName}}</span>
        <slot name="detail" :rankDetail="item.rankDetail"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props =  defineProps<{
  title: string;
  data: any;
}>();



</script>

<style scoped>
.rank {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.rank-info li {
  list-style: none;
  flex: 1;
  vertical-align: bottom;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  line-height: 100%;
}
.rank-info li:hover {
  background-color: rgb(248, 248, 248);

}
.rank-title {
  font-size: 24px;
  color: #f81515;
  margin: 20px 0;
}
.rank-info {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.rank-name{
  overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
}

.rank-num {
  font-size: 20px;
  margin-right: 10px;
  color: rgb(160, 160, 160);
}
li:nth-of-type(-n + 3) span:nth-child(1) {
  color: #f81515;
}

</style>
