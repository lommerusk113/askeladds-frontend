<template>
    <button class="border rounded-lg p-3 cursor-pointer" :class="buttonClass">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
    type Props = {
        text?: string
        buttonClass?: string
    }

    defineProps<Props>()
</script>

<style scoped>

</style>