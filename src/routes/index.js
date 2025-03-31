import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: "/",
        component : () => import('../layout/Master.vue'),
        children : [
            {
                path: '',
                name : 'home',
                component : () => import('../pages/Home.vue')
            }
        ]
    }
];


const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;