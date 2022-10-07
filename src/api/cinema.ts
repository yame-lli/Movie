import serve from './index'

export const apiGetCinemaList = ()=>{
    return serve({
        url:'/selectAllCinemas',
        method:'GET',
    })
}

export const apiSelectCinemaByScore = ()=>{
    return serve({
        url:'/selectCinemaByScore',
        method:'GET',
    })
}

export const apiSelectCinemaById = (data:any)=>{
    return serve({
        url:'/seleceCinemaById',
        method:'GET',
        params:{
            id:data.id
        }
    })
}