import { defineStore } from 'pinia'
import {apiGetHotNews} from '@/api/news'

interface News {
    consultAnnouncer: string
    consultContent: string
    consultPicture?: string
    consultScore: number
    consultState?: any
    consultTitle: string
    id: number
    img: string
}

export const useNewsStore = defineStore('newsStore',{
    state: ()=>{
        return {
            newsList:[] as News[]
        }
    },
    getters:{

    },
    actions:{
        async reqGetHotNewsList() {
            let result = await apiGetHotNews()
            if (result.code == 200) {
                this.newsList = result.data
            }
        },
    }
})