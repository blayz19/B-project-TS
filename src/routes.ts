import { createRouter,createWebHistory } from 'vue-router';
import { useAuthStore } from './stores/auth.store';



export const router = createRouter({
    routes:[
        {
            path: '/:pathMatch(.*)*',
            component: () => import('./views/NotFoundView.vue'),
            name: 'NotFound',
        },
        {
            path: '/',
            component: () => import('./views/AuthView.vue'),
            name: 'Auth'
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

router.beforeEach((to, from) => {
    const authStore = useAuthStore();
    if(!authStore.getToken && to.name != 'Auth'){
        return {name: 'Auth'}
    }

});