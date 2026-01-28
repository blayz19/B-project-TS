<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import PlusIcon from '@/icons/PlusIcon.vue';

    const store = useCategoryStore();
    onMounted(()=>{
        store.fetchCategories();
    })
</script>

<template>
    <ul class="category-list">
        <li class="list"v-for="item in store.categories" :key="item.id">
            <RouterLink :to="`/main/${item.alias}`">{{ item.name }}</RouterLink>
        </li>
    </ul>
    <ButtonIcon @click="store.createCategory"><PlusIcon></PlusIcon></ButtonIcon>
</template>

<style scoped>
    .category-list{
        display: flex;
        flex-direction: column;
        gap:34px;
        margin: 0;
        padding: 0;
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

</style>