<template>
    <Page>
        <div v-if="user" class="mt-24 shadow-lg bg-white p-5 rounded grid justify-center gap-5">
            <div>
                Welcome {{user.data.user.email}}
            </div>

            <button @click="logout" class="border cursor-pointer p-2 text-white bg-blue-500 rounded-md">Logout</button>
        </div>
    </Page>
</template>

<script setup lang="ts">
import Page from "../components/utilities/Page.vue";

definePageMeta({
    middleware: 'auth'
})

const { $supabase } = useNuxtApp()
const user = ref()

onBeforeMount(async () => {
    user.value = await $supabase.auth.getUser()
})

const logout = ( ) => {
    $supabase.auth.signOut()
    return navigateTo('/login')
}


</script>

<style scoped>

</style>