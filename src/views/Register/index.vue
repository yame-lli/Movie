<template>
    <LoginRegisterForm :config="config" formStyle="flex-1 p-10" itemStyle="text-xl" :modelValue="user"
        @update:modelValue="setValue" ref="R">
        <template #bottom>

            <el-link class="text-center float-right" @click="toLogin">登录</el-link>

        </template>

    </LoginRegisterForm>
</template>
  
<script setup lang="ts">
import LoginRegisterForm from '@/components/LoginRegisterForm/index.vue'
import config from './registerConfig'
import { reactive, ref, onMounted, toRaw, toRef, computed } from 'vue'
import {useRouter} from 'vue-router'


type User = {
    username: string
    password: string
    email:string
}

let user = reactive<User>({
    username: '',
    password: '',
    email:''
})

let R = ref(null)
const setValue = (value: string, key: keyof User) => {
    console.log(value, key);
    user[`${key}`] = value
}

const router = useRouter()
const toLogin = ()=>{
    router.push({
        name:'Login'
    })
}

onMounted(() => {

    console.log();
})




</script>
  
<style scoped >

</style>
  