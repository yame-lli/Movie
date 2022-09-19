import { defineStore } from "pinia"


export const useMovieStore = defineStore('Movie', {
    state:()=>{
        return {
            current:'movie'
        }
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters:{

    },
    //可以操作异步 和 同步提交state
    actions:{

    }
})