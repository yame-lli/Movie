import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [

    {
        path: "/",
        redirect:"/home",
        children: [{
            path: '/home',
            name: "Home",
            component: () => import('../views/Home/index.vue')
        }, {
            path: '/movie',
            name: "Movie",
            component: () => import('../views/movie/index.vue')
        }]
    }]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router