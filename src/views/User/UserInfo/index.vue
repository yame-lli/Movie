<template>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
      label-position="left"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username"/>
    </el-form-item>
    <el-form-item label="电话" prop="phone">
      <el-input v-model="ruleForm.phone"/>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model.number="ruleForm.email" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  username: '',
  phone: '',
  email: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
