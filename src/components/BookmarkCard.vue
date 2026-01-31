<script setup lang="ts">
    import CategoryTrashIcon from '@/icons/CategoryTrashIcon.vue';
    import BigButtonIcon from './BigButtonIcon.vue';
    import LinkIcon from '@/icons/LinkIcon.vue';
    import type { Bookmark } from '@/interfaces/bookmark.interface';
    import { useBookmarkStore } from '@/stores/bookmark.store';
    import {ref} from 'vue';
    import PopupConfirm from './PopupConfirm.vue';

    const {id, title, image, url, category_id} = defineProps<Bookmark>();
    const bookmarkStore = useBookmarkStore();
    const isOpened = ref<boolean>(false);

    function openLink(){
        window.open(url, '_blank');
    }
</script>

<template>
    <div class="card">
        <div class="card-image" :style="{backgroundImage: `url(${image})`}">
            
        </div>
        <p class="card-info">
            {{ title }}
        </p>
        <div class="card-buttons">
            <BigButtonIcon @click="()=> isOpened=!isOpened"><CategoryTrashIcon></CategoryTrashIcon></BigButtonIcon>
            <BigButtonIcon @click="openLink"><LinkIcon></LinkIcon></BigButtonIcon>
        </div>
        <PopupConfirm text="Хотите удалить закладку?" :is-opened="isOpened" @cancel="isOpened=!isOpened" @ok="bookmarkStore.deleteBookmark(id, category_id)"></PopupConfirm>
    </div>
</template>

<style scoped>
    .card{
        border-radius: 30px;
        background: var(--color-fg);
        box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, 0.1);
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .card-info{
        color: var(--color-bg);
        font-size: 16px;
        font-weight: 500;
    }
    .card-buttons{
        display: flex;
        justify-content: space-between;
    }
    .card-image{
        min-height: 160px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 20px;
    }
</style>