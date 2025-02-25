<template>
    <div class="grid gap-5">
        <TextField
            v-model="email"
            icon="envelope"
            placeholder="Enter your email"
            label="Email"
            type="text"
        />

        <TextField
            v-model="password"
            icon="lock"
            placeholder="Create a password"
            label="Password"
            type="password"
        />

        <div class="flex gap-2">
            <input type="checkbox" />
            <span>I agree to the
                <span class="text-blue-600 hover:underline cursor-pointer">
                    Terms of Service
                </span>
                and
                <span class="text-blue-600 hover:underline cursor-pointer">
                    Privacy Policy
                </span>
            </span>
        </div>


        <Button @click="signup" button-class="text-lg text-white bg-blue-700 hover:bg-blue-900">Sign up</button>
    </div>
</template>

<script setup lang="ts">
import Button from "../utilities/Button.vue";
import TextField from "../utilities/TextField.vue";
import {navigateTo} from "nuxt/app";
const email = ref<string>()
const password = ref<string>()
const { $supabase } = useNuxtApp()

const signup = async() => {

    if (!email.value || !password.value) {
        alert("fyll inn alt...")
        return
    }

    const { data, error } = await $supabase.auth.signUp({
        email: email.value,
        password: password.value,
    })

    if (data.user?.aud === 'authenticated') {
        return navigateTo('/home')
    }
}




</script>

<style scoped>

</style>