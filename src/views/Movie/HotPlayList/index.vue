<template>
  <div class="hot-play-list max-w-1200px mx-auto grid grid-cols-5 gap-15 justify-center">

    <div>

      <MovieCard class="hot-play-list-item group relative transform hover:scale-105">
        <template #info>
          <div style="padding: 6px"
            class="hidden group-hover:block absolute -bottom-1px w-100%  z-999 bg-white rounded-t-sm">
            <span class="text-gray-600 text-xl font-medium">姜子牙</span>
            <div class="flex justify-between">
              <ul class="text-sm text-gray-400">
                <li>主演:XXX</li>
                <li>上映时间:xxx</li>
              </ul>
              <span class="text-orange-600 text-3xl">9.9</span>
            </div>
          </div>
        </template>

      </MovieCard>

      <div class="flex flex-col items-center p-2 group-hover:hidden">
        <span class="text-lg pb-1">姜子牙</span>
        <span class="text-orange-600 text-2xl">9.9</span>
      </div>

    </div>



  </div>
</template>

<script setup lang="ts">
import MovieCard from "@/components/MovieCard/index.vue";
</script>

<style scoped>
.hot-play-list-item {
  width: 100%;

}


.bottom {
  margin-top: 10px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
