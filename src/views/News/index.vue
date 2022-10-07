<template>
  <div class="news">


    <div class="news-box">


      <div class="news-box-right">
        <HotNews class=""></HotNews>
      </div>
      <div class="news-box-left">
        <LatestNews class=""></LatestNews>
      </div>



    </div>


  </div>
</template>

<script setup lang="ts">
import LatestNews from "./LatestNews/index.vue";
import HotNews from "./HotNews/index.vue"

</script>

<style>
.news-box {
  /*margin-top: 40px;*/
  margin: 40px auto 0;
  width: 1200px;


}
.news-box-left {
  width: 730px;
  margin-right: 0;
  display: block;
}

.news-box-right {
  float: right;
  width: 360px;
  font-size: 14px;
}



</style>