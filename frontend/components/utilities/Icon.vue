<template>

    <font-awesome-icon :icon="['fas', icon]" />
</template>

<script setup lang="ts">

type Props = {
    icon: string
}

defineProps<Props>()


</script>

<style scoped>

</style>