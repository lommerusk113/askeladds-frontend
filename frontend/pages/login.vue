<template>
 <Page>
     <div class="xl:w-2/6 md:w-3/6 w-full md:max-h-[50%]  p-5 md:mt-24 border border-gray-200  shadow-lg md:rounded-xl bg-white grid gap-y-5">
         <div class="flex rounded-lg bg-gray-200 p-1">
             <Button button-class="flex-grow border-0" @click="setLoginActive" :class="loginActive ? 'bg-white' : 'bg-gray-200'">Login</Button>
             <Button button-class="flex-grow border-0" @click="setLoginInActive" :class="!loginActive ? 'bg-white' : 'bg-gray-200'">Signup</Button>
         </div>
         <div class="grid gap-5">
             <TextField v-model="username" icon="user" placeholder="Enter your username or email" label="Username or Email" type="text"/>
             <TextField v-model="password" icon="user" placeholder="Enter your password" label="Password" type="password"/>

             <div class="flex justify-between">
                 <div class="flex gap-2">
                     <input type="checkbox" />
                     <span>Remember me</span>
                 </div>
                 <span class="text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
             </div>


             <Button button-class="text-lg text-white bg-blue-700 hover:bg-blue-900">Sign in</button>
         </div>
         <div class="flex">

            <div></div>
         </div>
     </div>
 </Page>
</template>

<script setup lang="ts">
import Page from "../components/utilities/Page.vue";
import TextField from "../components/utilities/TextField.vue";
import Button from "../components/utilities/Button.vue";

const loginActive = ref<boolean>(true)
const username = ref<string>()
const password = ref<string>()

const setLoginActive = () => {
    loginActive.value = true
}

const setLoginInActive = () => {
    loginActive.value = false
}


</script>