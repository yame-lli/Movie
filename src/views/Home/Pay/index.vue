<template>
    <div>
        <el-steps class="justify-center mt-10 max-w-800px mx-auto" :active="1">
            <el-step title="选座" />
            <el-step title="支付" />
            <el-step title="完成" />
        </el-steps>


        <div class="max-w-1000px  mx-auto">

            <div class="flex justify-end">
                <div class=" flex flex-col w-fit items-center mt-8 ">
                    <span class="text-white text-sm bg-gray-200 block text-center w-20% rounded-2xl mb-4 ">荧屏</span>
                    <div class="flex w-fit">
                        <aside class="bg-gray-300 rounded-2xl w-fit mr-4">
                            <div class="flex flex-col py-4 px-2">
                                <span class="h-50px">1</span>
                                <span class="h-50px">2</span>
                                <span class="h-50px">3</span>
                                <span class="h-50px">4</span>
                                <span class="h-50px">5</span>
                                <span class="h-50px">6</span>
                                <span class="h-50px">7</span>
                                <span class="">8</span>
                            </div>
                        </aside>

                        <div class="grid grid-cols-10  w-500px grid-rows-8 h-400px justify-items-center">
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                            <el-checkbox v-model="checked1" class="" />
                        </div>
                    </div>
                </div>

                <div class="ml-10 border-l-1 p-l-10 border-gray-200">
                    <div class="mt-10 pb-10">
                        <div class="flex"><img class="w-100px mr-4"
                                src="https://p0.pipi.cn/mmdb/25bfd6dde7a51b395bcf3e2b4cad4808212df.jpg?imageView2/1/w/464/h/644"
                                alt="">
                            <div class="flex flex-col justify-between">
                                <div class="text-2xl text-gray-700">万里归途</div>
                                <div class="text-2xl text-gray-700">HOME COMING</div>
                                <div class="text-sm text-gray-500">中国大陆 / 137分钟</div>
                                <div class="text-sm text-gray-500">语言：汉语</div>
                            </div>
                        </div>
                    </div>

                    <div class="text-sm ">
                        <div><span class="text-gray-500">影院：</span><span>大地影院</span></div>
                        <div><span class="text-gray-500">影厅：</span><span>1号厅</span></div>
                        <div><span class="text-gray-500">票价：</span><span>66元/张</span></div>
                        <div><span class="text-gray-500">场次：</span><span>2022-02-02 00:00:00</span></div>
                        <div><span class="text-gray-500">座位：</span><span></span></div>
                    </div>

                    <div class="mt-10 mb-6">
                        <span class="text-sm text-gray-500">总计：</span>
                        <span class="text-orange-600 text-3xl ">132元</span>
                    </div>

                    <el-button color="#ff6600" class="w-200px">立即购票</el-button>
                </div>
            </div>




        </div>



        <div>
        </div>

    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const checked1 = ref(false)
</script>

<style scoped>
/* :deep() .el-checkbox__inner{
     width:40px;
     height: 40px; 
} */

.el-checkbox {
    zoom: 280%;
    margin: 0;
    height: auto;
}
</style>