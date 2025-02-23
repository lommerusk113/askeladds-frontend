<template>
    <component
        :is="IconComponent"
        :size="size"
        v-if="IconComponent"
    />
</template>

<script setup lang="ts">
import * as PhosphorIcons from '@phosphor-icons/vue'
import {useStringUtils} from "../../utils/StringUtils";
const { capitalizeFirstLetter } = useStringUtils() || {}

type Props = {
    icon: string
    size?: number
}

const props = defineProps<Props>()
const IconComponent = computed(() => PhosphorIcons["Ph" + capitalizeFirstLetter(props.icon)])

</script>

<style scoped>

</style>