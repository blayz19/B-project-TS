<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import PlusIcon from '@/icons/PlusIcon.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useRouter } from 'vue-router';

    const store = useCategoryStore();
    const authStore = useAuthStore();
    const router = useRouter();

    onMounted(()=>{
        store.fetchCategories();
    })
    function logout(){
        authStore.clearToken();
        router.push({name: 'Auth'});
    }
</script>

<template>
    <ul class="category-list">
        <li class="list"v-for="item in store.categories" :key="item.id">
            <RouterLink active-class="active-link" :to="`/main/${item.alias}`">{{ item.name }}</RouterLink>
        </li>
        <li>
            <ButtonIcon @click="store.createCategory"><PlusIcon></PlusIcon></ButtonIcon>
        </li>
        <li class="list">
            <a  href="#" @click="logout">Выход</a>
        </li>
    </ul>
    
</template>

<style scoped>
    .category-list{
        display: flex;
        flex-direction: column;
        gap:34px;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .list{
        list-style: none;

    }
    .list a{
        text-decoration: none;
        font-size: 14px;
        transition: all 0.5s;
        color: var(--color-fg)
    }
    .list a:hover{
        font-size: 24px;
        font-weight: 700;
    }
    .list a.active-link{
        font-size: 24px;
        font-weight: 700;
    }

</style>