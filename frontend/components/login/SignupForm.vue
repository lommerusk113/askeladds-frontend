<template>
    <div class="grid gap-5">
        <TextField
            v-model="username"
            icon="user"
            placeholder="Choose a username"
            label="Username"
            type="text"
        />

        <TextField
            v-model="email"
            icon="user"
            placeholder="Enter your email"
            label="Email"
            type="text"
        />

        <TextField
            v-model="password"
            icon="user"
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


        <Button button-class="text-lg text-white bg-blue-700 hover:bg-blue-900">Sign in</button>
    </div>
</template>

<script setup lang="ts">
import Button from "../utilities/Button.vue";
import TextField from "../utilities/TextField.vue";


const username = ref<string>()
const email = ref<string>()
const password = ref<string>()


</script>

<style scoped>

</style>