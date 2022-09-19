import { defineStore } from "pinia"

export const useUserStore = defineStore('User', {
    state:()=>{
        return {
            current:'user'
        }
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters:{

    },
    //可以操作异步 和 同步提交state
    actions:{

    }
})
