import serve from './index'

export const apiGetHotNews = () => {
    return serve({
        url: '/selectAllConsult',
        method: 'GET',
    })
}