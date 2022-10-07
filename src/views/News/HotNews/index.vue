<template>
  <div class="hot-news">
    <h4 class="hot-news-title">热门资讯</h4>
    <ul>
      <li class="top-list">
        <div class="top">
          <a href="#">
            <img src="#" alt>
            <i class="ranking">1</i>
          </a>
          <span class="top1-list-content">
            <a href="#">电影，也被称为运动画面或动态画面，即“映画”，是作品视觉艺术形式，通过使用移动图像来表达沟通思想，故事，认知，情感，价值观，或各类大气模拟体验。</a>
          </span>
        </div>

      </li>


      <li>
        <div class="normal-link">
          <i class="ranking">2</i>
          <p class="top10-content">
            <a href="#">
              <span class="normal-text">
              电影，也被称为运动画面或动态画面，即“映画”，是作品视觉艺术形式，通过使用移动图像来表达沟通思想，故事，认知，情感，价值观，或各类大气模拟体验。
              </span>
            </a>
          </p>
        </div>
      </li>


    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.hot-news {
  width: 360px;
  margin-right: 0;
  float: right;
}

.hot-news-title {
  font-size: 26px;
  line-height: 1;
  margin-bottom: 20px;
  color: #ef4238;
}

h4 {
  font-weight: 400;
  margin: 0;
}

.top-list {
  margin-bottom: 10px;
}

.top a img {
  width: 120px;
  height: 68px;
  vertical-align: bottom;
  color: #030303;
}


.top1-list-content {
  float: right;
  width: 220px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2
}



.top a i {
  position: absolute;
  width: 20px;
  height: 17px;
  background-color: red;
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  text-align: center;
  color: white;
}

.top a {
  position: relative;

}

.normal-link {
  padding: 10px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;

}

.normal-link i {
  width: 15px;
  /*height: 18px;*/
  color: #ef4238;
  font-size: 20px;
  font-style: italic;
  margin: 10px 10px 10px 0;
}

/*.top1-list-content a,*/
.normal-link a {
  /*display: block;*/
  /*padding: 10px 0;*/
  /*overflow: hidden;*/
  /*white-space: nowrap;*/
  /*text-overflow: ellipsis;*/
  /*position: relative;*/

}

.normal-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.top10-content{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>