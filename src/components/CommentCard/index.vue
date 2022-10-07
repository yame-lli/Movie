<template>
    <div class="mt-10" v-if="user">
        <div class="flex items-center">
            <el-avatar class="self-start" :src="`data:image/jpg;base64,`+user.avatar" />
            <div class="flex-1 ml-4">
                <span class="text-gray-600">{{user.username}}</span>
                <div class="flex items-center">
                    <span class="text-gray-400 mr-4">{{comment.commentTime.slice(0,10)}}</span>
                    <el-rate v-model="value" disabled text-color="#ff9900" />
                </div>
            </div>
            
        </div>

        <div class="text-gray-600 text-sm ml-14 pt-4 pb-8 border-b-1 border-gray-200">
            {{comment.commentContent}}</div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { apiGetUserById } from '@/api/user'

type Comment = {
    id: number;
    userId: number;
    commentContent: string;
    movieId: number;
    commentTime: string;
    commentUser?: any;
}
type Props = {
    comment: Comment
}



const { comment } = defineProps<Props>()

let user = ref()
apiGetUserById(comment.userId).then((result) => {
    if (result.code == 200) {
        user.value = result.data
        console.log(user);
    }


})



const value = ref(3.7)
</script>

<style scoped>

</style>