<template>
 <Page>
     <div class="xl:w-2/6 md:w-3/6 w-full  p-5 md:mt-24 border border-gray-200  shadow-lg md:rounded-xl bg-white grid gap-y-5">
         <div class="flex rounded-lg bg-gray-200 p-1 font-bold">
             <Button button-class="flex-grow border-0" @click="setLoginActive" :class="loginActive ? 'bg-white' : 'bg-gray-200'">Login</Button>
             <Button button-class="flex-grow border-0" @click="setLoginInActive" :class="!loginActive ? 'bg-white' : 'bg-gray-200'">Signup</Button>
         </div>
        <LoginForm v-if="loginActive" />
        <SignupForm v-else />
     </div>
 </Page>
</template>

<script setup lang="ts">
import Page from "../components/utilities/Page.vue";
import Button from "../components/utilities/Button.vue";
import LoginForm from "../components/login/LoginForm.vue";
import SignupForm from "../components/login/SignupForm.vue";

definePageMeta({
    middleware: 'auth'
})

const loginActive = ref<boolean>(true)


const setLoginActive = () => {
    loginActive.value = true
}

const setLoginInActive = () => {
    loginActive.value = false
}


</script>