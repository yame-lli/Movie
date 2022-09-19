<template>
  <div class="hot-play-list">
    <MovieCard class="hot-play-list-item">
      <template #bottom>
        <div style="padding: 6px">
          <span>姜子牙</span>
          <div class="bottom">
            <ul>
                <li>主演</li>
                <li>上映时间</li>
            </ul>
            <span>9.9</span>
          </div>
        </div>
      </template>
    </MovieCard>
  </div>
</template>

<script setup lang="ts">
import MovieCard from "@/components/MovieCard/index.vue";
</script>

<style scoped>
.hot-play-list-item{
    width: 200px;
}
.bottom {
  margin-top: 10px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
