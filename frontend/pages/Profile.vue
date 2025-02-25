<template>
   <Page>
       <div class="mt-24 shadow-lg border border-gray-300 w-1/2 bg-white p-5 rounded-xl grid gap-5">
           <div class="flex items-center gap-2">
               <Icon  icon="key" size="25"/>
               <div class="text-xl font-bold">Api Keys</div>
           </div>

           <div class="flex gap-3">
               <TextField type="text" v-model="apiKey" class="flex-grow" container-class="!rounded-xl border-gray-200" placeholder="Paste your API key here" />
               <Button @click="addApiKey" class="border p-3 rounded-xl bg-blue-500 text-white px-5 cursor-pointer hover:bg-blue-600">Add key</Button>
           </div>

           <ApiKeyListItem v-for="key in keys" v-bind:key="key.key" :api-key="key" />

       </div>
   </Page>
</template>

<script setup lang="ts">
import Page from "../components/utilities/Page.vue";
import Button from "../components/utilities/Button.vue";
import Icon from "../components/utilities/Icon.vue";
import TextField from "../components/utilities/TextField.vue";
import ApiKeyListItem from "../components/profile/ApiKeyListItem.vue";
import {onMounted} from "@vue/runtime-core";
import {useNuxtApp} from "nuxt/app";
import {ref} from "@vue/reactivity";
import type {ApiKey} from "../types";

const apiKey = ref<string>()
const keys = ref<ApiKey[]>()
const { $supabase, $profileService } = useNuxtApp()
const currentUser = ref<string>()

definePageMeta({
    middleware: 'auth'
})

onMounted(async () => {

    const {data, error} = await $supabase?.auth.getUser()
    currentUser.value = data.user?.id

    const user = await $profileService.getProfile(currentUser.value)
    keys.value = user.keys
})

const addApiKey = () => {
    console.log("saving api key: ", apiKey.value)
    console.log(currentUser.value)
    $profileService.addApiKey(apiKey.value, currentUser.value)
}

</script>
