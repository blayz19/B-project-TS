<script setup lang="ts">
    import type { Category } from '@/interfaces/category';
    import { useCategoryStore } from '@/stores/categories.store';
    import { useRoute, onBeforeRouteUpdate } from 'vue-router';
    import {watch, ref, onMounted} from 'vue';
    import { useBookmarkStore } from '@/stores/bookmark.store';
    import CategoryHeader from '@/components/CategoryHeader.vue';
    import BookmarkCard from '@/components/BookmarkCard.vue';
    import Bookmarksort from '@/components/Bookmarksort.vue';
    import BookmarkAdd from '@/components/BookmarkAdd.vue';
    const route = useRoute();
    
    const categoryStore = useCategoryStore();
    const category = ref<Category>();

    const bookmarkStore = useBookmarkStore();
    
    
    function sortBookmarks(sort: string){
        bookmarkStore.activeSort = sort;
        if(category.value){
            bookmarkStore.fetchBookmarks(category.value?.id, bookmarkStore.activeSort);
        }
    }
    
    watch(()=>({
        alias: route.params.alias,
        categories: categoryStore.categories
    }),
        (data) => {
        category.value = categoryStore.getCategoryByAlias(route.params.alias);
        if(category.value){bookmarkStore.fetchBookmarks(category.value?.id, bookmarkStore.activeSort)}
        
    });

    onBeforeRouteUpdate((to)=>{
        category.value = categoryStore.getCategoryByAlias(to.params.alias);
    });
    onMounted(()=>{
        category.value = categoryStore.getCategoryByAlias(route.params.alias);
        if(category.value){bookmarkStore.fetchBookmarks(category.value?.id, bookmarkStore.activeSort)};
    })
</script>

<template>
    <CategoryHeader v-if="category" :category="category"></CategoryHeader>
    <Bookmarksort :option="bookmarkStore.activeSort" @sort="sortBookmarks"></Bookmarksort>
    <div class="bookmarks">
        <BookmarkCard v-for="item in bookmarkStore.bookmarks" :key="item.id" v-bind="item"></BookmarkCard>
        <BookmarkAdd v-if="category" :category_id="category?.id"></BookmarkAdd>
    </div>
    
</template>

<style scoped>
    .bookmarks{
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(10,350px);
        gap:24px;
    }
</style>