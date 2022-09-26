import { defineStore } from "pinia"
import { apiLogin } from '@/api/user'
import { resolve } from "path"
import { reject } from "lodash"

type Res = {
    code: number,
    msg: string,
    data: object
}


export const useUserStore = defineStore('User', {
    state: () => {
        return {
            user: {}
        }
    },

    getters: {

    },

    actions: {
        async reqLogin(data: any) {
            let result = await apiLogin(data)
            if (result.code == 200) {
                this.user = result.data
                return true
            }
            else {
                return false                
            }
        }
    }
})
