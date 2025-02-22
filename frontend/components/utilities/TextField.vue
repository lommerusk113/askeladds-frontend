<template>
    <div class="p">
        <label class="font-bold" v-if="label">{{ label }}</label>
        <div class="p-3 flex border rounded w-auto items-center gap-5 text-xl" :class="modelValue ? 'text-black' : 'text-gray-600'">
            <Icon v-if="icon" :icon="icon" />
            <input
                :value="modelValue"
                @input="updateValue"
                :placeholder="placeholder"
                class="w-full border-0 outline-none"
                :type="type"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import Icon from "./Icon";


type Props = {
    icon?: string
    placeholder?: string
    modelValue: string
    label?: string
    type: 'text' | 'password'
}

defineProps<Props>()
const emit = defineEmits<{
    'update:modelValue': [value: string]
}>()

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement
    console.log("updating to: ", target.value)
    emit('update:modelValue', target.value)
}
</script>