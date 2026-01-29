<script setup lang="ts">
    import type { Category } from '@/interfaces/category';
    import { useCategoryStore } from '@/stores/categories.store';
    import { useRoute, onBeforeRouteUpdate } from 'vue-router';
    import {watch, ref, onMounted} from 'vue';
    import { useBookmarkStore } from '@/stores/bookmark.store';
    
    const route = useRoute();
    
    const categoryStore = useCategoryStore();
    const category = ref<Category>();

    const bookmarkStore = useBookmarkStore();

    watch(()=>({
        alias: route.params.alias,
        categories: categoryStore.categories
    }),
        (data) => {
        category.value = categoryStore.getCategoryByAlias(route.params.alias);
        if(category.value){bookmarkStore.fetchBookmarks(category.value?.id)}
        
    });

    onBeforeRouteUpdate((to)=>{
        category.value = categoryStore.getCategoryByAlias(to.params.alias);
    });
    onMounted(()=>{
        category.value = categoryStore.getCategoryByAlias(route.params.alias);
        if(category.value){bookmarkStore.fetchBookmarks(category.value?.id)};
    })
</script>

<template>
    {{ category?.name }}
    {{ bookmarkStore.bookmarks.length }}
</template>