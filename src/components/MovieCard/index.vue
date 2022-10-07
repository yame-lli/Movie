<template>
  <el-card shadow="hover" :body-style="{ padding: '0px' }" @click="toMovieDetail">
    <img :src="`data:image/jpg;base64,`+props.movieDetail.movieImg" class="image " />

    <slot name="info"></slot>

    <slot name="bottom"></slot>


  </el-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
type MovieDetail = {
  id: number;
  movieCName: string;
  movieFName: string;
  movieActor: string;
  movieDirector: string;
  movieDetail: string;
  movieDuration: string;
  movieType: string;
  movieScore: number;
  movieBoxOffice: number;
  movieCommentCount: number;
  movieReleaseDate: string;
  movieCountry: string;
  moviePicture: string;
  movieState: number;
  commentList?: any;
  movieImg: string;
}

type Props = {
  movieDetail: MovieDetail
}

const props = defineProps<Props>()



const router = useRouter()
const toMovieDetail = () => {
  router.push({
    name: 'MovieDetail',
    query: {
      id: props.movieDetail.id
    }
  })
}


</script>

<style scoped>
.el-card {
  box-sizing: border-box;
  @apply duration-50 transition
}

.image {
  width: 100%;
  display: block;
}
</style>
