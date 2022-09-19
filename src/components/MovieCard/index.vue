<template>
  <el-card shadow="hover" :body-style="{ padding: '0px' }">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="image"
    />


    <div>
       <slot name="bottom"></slot>
    </div>
   
  </el-card>
</template>

<script setup lang="ts">


</script>

<style scoped>
.el-card {
  box-sizing: border-box;

}

.image {
  width: 100%;
  display: block;
}
</style>
