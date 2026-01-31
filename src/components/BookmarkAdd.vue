<script setup lang="ts">
import { ref } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import PlusIcon from '@/icons/PlusIcon.vue';
import InputDefault from './InputDefault.vue';
import OkIcon from '@/icons/OkIcon.vue';
import { useBookmarkStore } from '@/stores/bookmark.store';

    const {category_id} = defineProps<{category_id: number}>();
    const isEdited = ref<boolean>(false);
    const newUrl = ref<string>();
    const bookmarkStore = useBookmarkStore();

    function addBookmark(){
        if(!newUrl.value){
            return;
        }
        bookmarkStore.addBookmark(newUrl.value, category_id);
        newUrl.value = '';
        isEdited.value = !isEdited.value;
        
    }
</script>

<template>
    <div class="bookmark-add">
        <ButtonIcon v-if="!isEdited" @click="()=>isEdited =!isEdited ">
            <PlusIcon></PlusIcon>
        </ButtonIcon>
        <div v-else class="bookmark-form">
            <InputDefault v-model="newUrl" is-focused></InputDefault>
            <ButtonIcon @click="addBookmark"><OkIcon></OkIcon></ButtonIcon>
        </div>
    </div>
</template>

<style scoped>
    .bookmark-add{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        border: 1px dashed var(--color-fg);
    }
    .bookmark-form{
        display: flex;
        gap:8px;
    }
</style>