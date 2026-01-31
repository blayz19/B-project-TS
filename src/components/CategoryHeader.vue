<script setup lang="ts">
import type { Category } from '@/interfaces/category';
import ButtonIcon from './ButtonIcon.vue';
import EditIcon from '@/icons/EditIcon.vue';
import { ref } from 'vue';
import InputDefault from './InputDefault.vue';
import OkIcon from '@/icons/OkIcon.vue';
import TrashIcon from '@/icons/TrashIcon.vue';
import { useCategoryStore } from '@/stores/categories.store';
import { useRouter } from 'vue-router';

    const {category} = defineProps<{category: Category}>();
    const isEdited = ref<boolean>();
    const newCategoryName =  ref<string>(category.name);

    const categoryStore = useCategoryStore();
    
    const router = useRouter();

    function toggleEdit(){
        isEdited.value = !isEdited.value;
    }

    function updateCategory(){
        if(!newCategoryName.value){
            return;
        }
        categoryStore.updateCategory(newCategoryName.value, category.alias, category.id);
        toggleEdit();
    };
    
    function deleteCategory(){
        categoryStore.deleteCategory(category.id);
        router.push({name:'main'});
    };


</script>

<template>
    <div class="category">
        <h1 v-if="!isEdited">{{ category.name }}</h1>
        <div class="edit-category" v-if="isEdited">
            <InputDefault  v-model="newCategoryName" @keyup.enter = 'updateCategory' is-focused></InputDefault>
            <ButtonIcon @click = "updateCategory" >
                <OkIcon></OkIcon>
            </ButtonIcon>
        </div>
        <div class="edit-buttons" v-if="!isEdited">
            <ButtonIcon @click = "toggleEdit">
                <EditIcon></EditIcon>
            </ButtonIcon>
            <ButtonIcon @click = "deleteCategory">
                <TrashIcon></TrashIcon>
            </ButtonIcon>
        </div>
        
    </div>
</template>

<style scoped>
    .category{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .edit-buttons{
        display: flex;
        gap: 5px;
    }
    .edit-category{
        display: flex;
        gap: 5px;
    }
</style>