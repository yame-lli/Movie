<template>
    <LoginRegisterForm :config="config" formStyle="flex-1 p-10" itemStyle="text-xl" :modelValue="user"
        @update:modelValue="setValue" ref="R">
        <template #bottom>

            <el-form-item class="flex mt-6">
                <el-button type="primary" @click="submitForm" class="flex-1">Submit</el-button>
                <el-button @click="resetForm">Reset</el-button>
            </el-form-item>

        </template>

    </LoginRegisterForm>
</template>
  
<script setup lang="ts">
import LoginRegisterForm from '@/components/LoginRegisterForm/index.vue'
import config from './loginConfig'
import { reactive, ref, onMounted, toRaw, toRef } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import useStore from '@/store/index'

type User = {
    username: string
    password: string
}

let user = reactive<User>({
    username: '',
    password: ''
})

let R = ref('')
const setValue = (value: string, key: keyof User, ruleFormRef: any) => {
    console.log(value, key);
    user[`${key}`] = value
    console.log(R);
    
}

console.log(R.value);




onMounted(() => {


})


const { userStore } = useStore()







const router = useRouter()
const submitForm = (formEl: FormInstance | undefined) => {
    console.log(formEl);

    if (!formEl) return;

    formEl.validate((valid) => {
        if (valid) {
            console.log("submit!");
            userStore.reqLogin(user).then(
                (flag: boolean) => {
                    if (flag) {
                        router.push({
                            name: 'Home'
                        })
                        ElNotification({
                            title: 'Success',
                            message: 'This is a success message',
                            type: 'success',
                            duration: 3000
                        })
                    }
                    else {
                        ElNotification({
                            title: 'Error',
                            message: 'This is an error message',
                            type: 'error',
                        })
                    }
                }
            )

        } else {
            console.log("error submit!");
            return false;
        }
    });
};

const resetForm = (formEl:FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};


</script>
  
<style scoped >

</style>
  