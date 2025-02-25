<template>
    <div class="grid gap-5">
        <TextField
            v-model="email"
            icon="user"
            placeholder="Enter your username or email"
            label="Username or Email"
            type="text"
        />

        <TextField
            v-model="password"
            icon="lock"
            placeholder="Enter your password"
            label="Password"
            type="password"
        />

        <div class="flex justify-between">
            <div class="flex gap-2">
                <input type="checkbox" />
                <span>Remember me</span>
            </div>
            <span class="text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
        </div>


        <Button
            @click="login"
            button-class="text-lg text-white bg-blue-700 hover:bg-blue-900"
        >Sign in
        </button>
    </div>
</template>

<script setup lang="ts">
import Button from "../utilities/Button.vue";
import TextField from "../utilities/TextField.vue";
import {navigateTo} from "nuxt/app";


const email = ref<string>()
const password = ref<string>()

const { $supabase } = useNuxtApp()

const login = async() => {
    console.log("clicked login")

    if (!email.value || !password.value) {
        alert("fyll inn alt...")
        return
    }

    const { data, error } = await $supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })

    if (data.user?.aud === 'authenticated') {
        return navigateTo('/home')
    }
}



</script>
