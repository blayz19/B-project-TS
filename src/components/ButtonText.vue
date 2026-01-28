<script setup lang="ts">

</script>

<template>
    <button class = "button-text">
    <slot></slot>
    </button>
</template>

<style scoped>
    .button-text{
        margin-top: 16px;
        border-radius: 50px;
        height:50px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-fg);
        cursor: pointer;
        color:var(--color-bg);
        padding: 24px 48px;
        font-size: 24px;
        font-weight: 700;
    }
    .button-text:hover{
        background: var(--color-fg-hover);
    }
</style>