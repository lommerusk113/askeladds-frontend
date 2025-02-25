<template>
    <div class="rounded-xl border-gray-100 flex justify-between bg-slate-100 p-5">
        <div class="flex gap-5">
            <div>{{ apiKey.key }}</div>
            <div class="rounded-full px-5" :class="accesssColor">{{ apiKey.access }}</div>
        </div>

        <div>
            <Icon  icon="x" />
        </div>
    </div>
</template>

<script setup lang="ts">

import type {ApiKey} from "../../types";
import Icon from "../utilities/Icon.vue";
import { AccessLevel } from "../../types";
import {computed} from "@vue/reactivity";

type Props = {
    apiKey: ApiKey
}

const props = defineProps<Props>()

const accesssColor = computed(() => {
    console.log(props.apiKey.access === AccessLevel.full)

    if (props.apiKey.access === AccessLevel.limited) {
        return 'bg-yellow-200'
    } else if (props.apiKey.access === AccessLevel.full) {
        console.log("truthy")
        return 'bg-green-200'
    } else if (props.apiKey.access === AccessLevel.basic) {
        return 'bg-red-200'
    } else {
        return 'bg-slate-300'
    }
})


</script>
