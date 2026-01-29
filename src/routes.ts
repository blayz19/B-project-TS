import { createRouter,createWebHistory } from 'vue-router';



export const router = createRouter({
    routes:[
        {
            path: '/:pathMatch(.*)*/:pathMatch1(.*)*',
            component: () => import('./views/NotFoundView.vue'),
            name: 'NotFound',
        },
        {
            path: '/',
            component: () => import('./views/AuthView.vue'),
        },
        {
            path: '/main',
            component: () => import('./views/MainView.vue'),
            children:[
                {
                    path: '',
                    name:'main',
                    component: () => import('./views/IndexView.vue'),
                },
                {
                    path: ':alias', 
                    component: () => import('./views/CategoryView.vue'),
                },
            ]
        },
    ],
    history: createWebHistory()
});