import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [

    {
        path: "/",
        redirect: "/home",
        children: [
            {
                path: '/home',
                name: "Home",
                component: () => import('../views/Home/index.vue')
            },
            {
                path: '/login',
                name: "Login",
                component: () => import('../views/Login/index.vue')
            },
            {
                path: '/register',
                name: "Register",
                component: () => import('../views/Register/index.vue')
            },
            {
                path: '/movie',
                name: "Movie",
                component: () => import('../views/Movie/index.vue')
            },
            {
                path: '/news',
                name: "News",
                component: () => import('../views/News/index.vue')
            },
            {
                path: '/cinema',
                name: "Cinema",
                component: () => import('../views/Cinema/index.vue')
            },
            {
                path: '/cinemaDetail',
                name: "CinemaDetail",
                component: () => import('../views/Cinema/CinemaDetail/index.vue')
            },
            {
                path: '/pay',
                name: "Pay",
                component: () => import('../views/Home/Pay/index.vue')
            },
            {
                path: '/movieDetail',
                name: "MovieDetail",
                component: () => import('../views/Movie/MovieDetail/index.vue')
            },]
    }]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router