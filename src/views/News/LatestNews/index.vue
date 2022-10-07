<template>
  <div class="latest-news">
    <h4 class="latest-header">最新资讯<a href="#" class="latest-all">全部></a><span class="arrow red-arrow"></span></h4>

    <div class="latest-news-list clearfix">

      <div class="latest-news-box">
        <a href="#"></a>
        <img src="#">
        <p class="latest-mews-title">-----</p>
        <div class="info-box">
          <span>----</span>
          <span class="views-count">123</span>
        </div>
      </div>

<!--      <div class="latest-news-box">-->
<!--        <a href="#"></a>-->
<!--        <img src="#" alt>-->
<!--        <p class="latest-mews-title">-&#45;&#45;&#45;&#45;</p>-->
<!--        <div class="info-box">-->
<!--          <span>&#45;&#45;&#45;&#45;</span>-->
<!--          <span class="views-count">123</span>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="latest-news-box">-->
<!--        <a href="#"></a>-->
<!--        <img src="#" alt>-->
<!--        <p class="latest-mews-title">-&#45;&#45;&#45;&#45;</p>-->
<!--        <div class="info-box">-->
<!--          <span>&#45;&#45;&#45;&#45;</span>-->
<!--          <span class="views-count">123</span>-->
<!--        </div>-->
<!--      </div>-->


    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style>
.latest-news {
  width: 730px;
  margin-right: 0;

}

.latest-news-box {
  width: 230px;
  height: 190px;
  float: left;
  margin: 0 20px 20px 0;
}

.latest-header {
  font-size: 26px;
  line-height: 1;
  margin-bottom: 20px;
  color: #ef4238;
}

.latest-all {
  font-size: 14px;
  color: inherit;
  float: right;
  margin-top: 10px;
}

.latest-news-list {
  margin-right: -20px;
}

.latest-news-list img {
  width: 230px;
  height: 129px;
}

</style>