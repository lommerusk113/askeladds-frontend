<template>
    <div class="cursor-pointer hover:bg-gray-100 rounded-full h-10 w-10 flex justify-center items-center text-xl">
        <Icon  :icon="icon" />
    </div>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";

type Props = {
    icon: string
}

defineProps<Props>()

</script>

<style scoped>

</style>