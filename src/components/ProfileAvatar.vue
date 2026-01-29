<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useProfileStore } from '@/stores/profile.store';

    const store = useProfileStore();
    
    onMounted(()=>{
        store.fetchProfile();
    })
</script>

<template>
    <div class="profile-avatar" v-if="store.profile">
        <img class="avatar-image"src="../../public/avatar.png" alt = "Изображение пользователя" />
        <div>Привет, <strong>{{ store.profile?.name }}</strong></div>
    </div>
    
</template>

<style scoped>
    .profile-avatar{
        display: flex;
        flex-direction: column;
        gap:24px;
        font-size: 18px;
        margin-bottom: 40px;
    }
    .avatar-image{
        width: 80px;
        height: 80px;
    }
</style>