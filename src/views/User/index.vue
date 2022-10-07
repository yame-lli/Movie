<template>
  <div class="user-page">
    <el-tabs type="border-card" class="demo-tabs">
      <el-tab-pane label="个人资料">
        <UserInfo/>
        <el-button type="primary"  class="change-password-btn">修改密码</el-button>
      </el-tab-pane>
      <el-tab-pane label="我的订单">
        <MyOrder/>
      </el-tab-pane>
      <el-tab-pane label="修改密码" class="changePass">
        Change Password
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import UserInfo from './UserInfo/index.vue'
import MyOrder from './MyOrder/index.vue'




</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}

.user-page {
  width: 1200px;
  margin: 60px auto 0;
}

.change-password-btn {
  margin-left: 120px;
}

</style>
