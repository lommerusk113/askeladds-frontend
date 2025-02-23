<template>
    <div @click="focusInputField" class="cursor-pointer">
        <label class="font-bold" v-if="label">{{ label }}</label>
        <div class="p-3 flex border rounded w-auto items-center gap-3 text-xl" :class="modelValue ? 'text-black' : 'text-gray-600'">
            <Icon v-if="icon" :icon="icon" :size="27" />
            <input
                ref="inputFieldRef"
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
    modelValue?: string
    label?: string
    type: 'text' | 'password'
}

defineProps<Props>()
const inputFieldRef = ref()
const emit = defineEmits<{
    'update:modelValue': [value: string]
}>()

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
}

const focusInputField = () => {
    inputFieldRef.value.focus()
}
</script>