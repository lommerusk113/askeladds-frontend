<template>
    <div class="grid gap-5">
        <TextField v-model="username" icon="user" placeholder="Enter your username or email" label="Username or Email" type="text"/>
        <TextField v-model="password" icon="lock" placeholder="Enter your password" label="Password" type="password"/>

        <div class="flex justify-between">
            <div class="flex gap-2">
                <input type="checkbox" />
                <span>Remember me</span>
            </div>
            <span class="text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
        </div>


        <Button button-class="text-lg text-white bg-blue-700 hover:bg-blue-900">Sign in</button>
    </div>
</template>

<script setup lang="ts">
import Button from "../utilities/Button.vue";
import TextField from "../utilities/TextField.vue";


const username = ref<string>()
const password = ref<string>()


</script>

<style scoped>

</style>