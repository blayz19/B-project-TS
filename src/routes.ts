import { createRouter,createWebHistory } from 'vue-router';
import Testing from './components/Testing.vue';
import Test from './components/Test.vue';


export const router = createRouter({
    routes:[
        {
            path: '/',
            component: () => import('./views/AuthView.vue'),
        },
        {
            path: '/main',
            component: () => import('./views/MainView.vue'),
            children:[
                {
                    path: 'development',
                    name:'main',
                    component: Test,
                },
                {
                    path: 'new', component: Testing,
                },
            ]
        },
    ],
    history: createWebHistory()
});