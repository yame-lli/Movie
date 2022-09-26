import serve from './index'

type Res = {
    msg?:string,
    code:number,
    data?:object
}

export const apiLogin = (data:any)=> {
    return serve({
        url: '/login',
        method: 'POST',
        params: data
    })
}

export const apiRegister = (data:any) => {
    return serve({
        url: '/register',
        method: 'POST',
        params: data
    })
}