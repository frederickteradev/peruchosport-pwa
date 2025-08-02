import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'Home',

            component: () => import('../views/Home.vue')

        },

        {
            path: '/Shop',
            name: 'Shop',

            component: () => import('../views/Shop.vue')

        },
        {
            path: '/About',
            name: 'About',

            component: () => import('../views/About.vue')

        },
        {
            path: '/Contact',
            name: 'Contact',

            component: () => import('../views/Contact.vue')

        }

    ]
})



export default router