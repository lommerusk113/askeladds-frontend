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
import {computed} from "@vue/reactivity";
const { capitalizeFirstLetter } = useStringUtils() || {}

type Props = {
    icon: string
    size?: string
}

const props = defineProps<Props>()
const iconName = computed(() => "Ph" + capitalizeFirstLetter(props.icon))
const IconComponent = computed(() =>
    (PhosphorIcons as Record<string, any>)[iconName.value] || null
)

</script>

<style scoped>

</style>