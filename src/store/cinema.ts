import { defineStore } from 'pinia'
import {apiGetCinemaList} from '@/api/cinema'

export const useCinemaStore = defineStore('cinemaStore',{
    state: ()=>{
        return {
            cinemaList:[]
        }
    },
    getters:{

    },
    actions:{
        async reqGetCinemaList() {
            let result = await apiGetCinemaList()
            if (result.code == 200) {
                this.cinemaList = result.data
            }
        },
    }
})