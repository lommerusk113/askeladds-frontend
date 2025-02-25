import { createClient, SupabaseClient } from '@supabase/supabase-js'
import {defineNuxtPlugin, useRuntimeConfig} from "nuxt/app";

export default defineNuxtPlugin(async (nuxtApp) => {

    const config = useRuntimeConfig()
    const supabaseUrl = config.public.supabaseUrl;
    const supabaseKey = config.public.supabaseKey;

    const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

    await supabase.auth.getSession()

    nuxtApp.provide('supabase', supabase)
})

// Add types to the NuxtApp interface
declare module '#app' {
    interface NuxtApp {
        $supabase: SupabaseClient
    }
}