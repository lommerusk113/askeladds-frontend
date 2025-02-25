import { defineNuxtRouteMiddleware, navigateTo } from '#app'
import {useNuxtApp} from "nuxt/app";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { $supabase } = useNuxtApp()
    const user = await $supabase?.auth.getUser()
    const isAuthenticated = user?.data?.user?.aud === 'authenticated'

    if (!isAuthenticated && to.path !== '/login') {
        console.log("redirecting to login")
        return navigateTo('/login')
    }

    if (isAuthenticated && to.path === '/login') {
        console.log("redirecting to home")
        return navigateTo('/home')
    }
})
