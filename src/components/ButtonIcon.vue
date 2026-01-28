<script setup lang="ts">
    
    const {height=32, width=32, radius = 50} = defineProps<{height?: number, width?: number, radius?:number}>();

</script>

<template>
    <button :style="{width: `${width}px`, height: `${height}px`, 'border-radius':`${radius}%`}" class = "button">
    <slot></slot>
    </button>
</template>

<style scoped>
    .button{
        margin-top: 16px;
        border-radius: 50%;
        width:32px ;
        height:32px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-fg);
        cursor: pointer;
    }
    .button:hover{
        background: var(--color-fg-hover);
    }
</style>