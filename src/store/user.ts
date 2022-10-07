import { defineStore } from "pinia"
import { apiLogin ,apiRegister } from '@/api/user'




export const useUserStore = defineStore('userStore', {
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
        },
        async reqRegister(data: any) {
            let result =  await apiRegister(data)
            console.log(result);
            
            if (result.code==200) {
                this.user = result
                return true
            }
            else {
                return false                
            }
        }
    }
})
