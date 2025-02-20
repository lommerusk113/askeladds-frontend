<template>
    <button>{{text}}</button>
</template>

<script setup lang="ts">
    type Props = {
        text?: string
    }

    defineProps<Props>()
</script>

<style scoped>

</style>