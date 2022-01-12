import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/views/Home";
import Portfolio from "@/views/Portfolio"

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/portfolio',
        name: "Portfolio",
        component: Portfolio
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})