<template>
  <div class="hot-play-list max-w-1200px mx-auto grid grid-cols-5 gap-5">
    <MovieCard class="hot-play-list-item">
      <template #bottom>
        <div style="padding: 6px">
          <span class="text-gray-600 text-xl">姜子牙</span>
          <div class="bottom">
            <ul class="text-sm text-gray-400">
              <li>主演:XXX</li>
              <li>上映时间:xxx</li>
            </ul>
            <span class="text-orange-600 text-3xl">9.9</span>
          </div>
        </div>
      </template>
    </MovieCard>
    <MovieCard class="hot-play-list-item">
      <template #bottom>
        <div style="padding: 6px">
          <span class="text-gray-600 text-xl">姜子牙</span>
          <div class="bottom">
            <ul class="text-sm text-gray-400">
              <li>主演:XXX</li>
              <li>上映时间:xxx</li>
            </ul>
            <span class="text-orange-600 text-3xl">9.9</span>
          </div>
        </div>
      </template>
    </MovieCard>
    <MovieCard class="hot-play-list-item">
      <template #bottom>
        <div style="padding: 6px">
          <span class="text-gray-600 text-xl">姜子牙</span>
          <div class="bottom">
            <ul class="text-sm text-gray-400">
              <li>主演:XXX</li>
              <li>上映时间:xxx</li>
            </ul>
            <span class="text-orange-600 text-3xl">9.9</span>
          </div>
        </div>
      </template>
    </MovieCard>
    <MovieCard class="hot-play-list-item">
      <template #bottom>
        <div style="padding: 6px">
          <span class="text-gray-600 text-xl">姜子牙</span>
          <div class="bottom">
            <ul class="text-sm text-gray-400">
              <li>主演:XXX</li>
              <li>上映时间:xxx</li>
            </ul>
            <span class="text-orange-600 text-3xl">9.9</span>
          </div>
        </div>
      </template>
    </MovieCard>
    <MovieCard class="hot-play-list-item">
      <template #bottom>
        <div style="padding: 6px">
          <span class="text-gray-600 text-xl">姜子牙</span>
          <div class="bottom">
            <ul class="text-sm text-gray-400">
              <li>主演:XXX</li>
              <li>上映时间:xxx</li>
            </ul>
            <span class="text-orange-600 text-3xl">9.9</span>
          </div>
        </div>
      </template>
    </MovieCard>
    <MovieCard class="hot-play-list-item">
      <template #bottom>
        <div style="padding: 6px">
          <span class="text-gray-600 text-xl">姜子牙</span>
          <div class="bottom">
            <ul class="text-sm text-gray-400">
              <li>主演:XXX</li>
              <li>上映时间:xxx</li>
            </ul>
            <span class="text-orange-600 text-3xl">9.9</span>
          </div>
        </div>
      </template>
    </MovieCard>
    <MovieCard class="hot-play-list-item">
      <template #bottom>
        <div style="padding: 6px">
          <span class="text-gray-600 text-xl">姜子牙</span>
          <div class="bottom">
            <ul class="text-sm text-gray-400">
              <li>主演:XXX</li>
              <li>上映时间:xxx</li>
            </ul>
            <span class="text-orange-600 text-3xl">9.9</span>
          </div>
        </div>
      </template>
    </MovieCard>
    <MovieCard class="hot-play-list-item">
      <template #bottom>
        <div style="padding: 6px">
          <span class="text-gray-600 text-xl">姜子牙</span>
          <div class="bottom">
            <ul class="text-sm text-gray-400">
              <li>主演:XXX</li>
              <li>上映时间:xxx</li>
            </ul>
            <span class="text-orange-600 text-3xl">9.9</span>
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
.hot-play-list-item {
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
