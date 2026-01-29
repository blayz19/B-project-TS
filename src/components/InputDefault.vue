<script setup lang="ts">
    const data = defineModel<string>();
</script>

<template>
    <input class="input" v-model="data"></input>
</template>
    
<style scoped>
    .input{
        border: none;
        border-bottom: 1px solid var(--color-fg);
        font-size: 24px;
        min-width: 274px;
        color: var(--color-fg);
    }
    .input::placeholder{
        color: var(--color-inactive);
    }
</style>