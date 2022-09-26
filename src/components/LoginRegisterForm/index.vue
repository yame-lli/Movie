<template>

    <video id="videoElement" autoplay muted loop class="w-120% fixed -z-1 -top-34 left-50% transform -translate-x-50%">
        <source src="@/assets/bgv.mp4">
    </video>



    <el-card shadow="always"
        class="max-w-screen-md min-h-100 mx-auto flex flex-row border-0 relative top-50% transform -translate-y-50%">
        <div :style="`background-image:url(${bg2}) `" class="h-full bg-cover bg-center w-1/4"></div>

        <el-form ref="ruleFormRef" :model="modelValue" status-icon  label-position="top" hide-required-asterisk="true"
            :class="formStyle">

            <el-form-item v-for="item in config.formItems" :key="item.field" :label="item.label" :rules="item.rules"
                :prop="item.field" :class="itemStyle">
                <el-input v-if="item.type==='input'||'password'" :show-password="item.type === 'password'"
                    :modelValue="modelValue[`${item.field}`]" @update:modelValue=" valueChange($event,item.field)" />


            </el-form-item>

            <slot name="bottom"></slot>


        </el-form>
    </el-card>


</template>
  
<script setup lang="ts">
import bg2 from "@/assets/bg2.jpg"
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";

import { IForm } from './type'

type props = {
    config: IForm
    itemStyle?: string
    formStyle?: string
    modelValue: any
 
}

defineProps<props>()

const emit = defineEmits(['update:modelValue'])

const valueChange = (value: string, key: string) => {
    emit('update:modelValue', value, key,ruleFormRef)
    console.log(value, key,ruleFormRef);

}


const ruleFormRef = ref<FormInstance>();
console.log(ruleFormRef);



defineExpose({
    ruleFormRef
})









</script>
  
<style scoped >
.el-card {
    border: 0
}

:deep() .el-card__body {
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;

}

.el-form-item :deep() label {
    font-size: 18px;
    font-weight: 700;
}

.el-button {
    @apply h-40px
}

.el-input {
    font-size: 18px;
}
</style>
  