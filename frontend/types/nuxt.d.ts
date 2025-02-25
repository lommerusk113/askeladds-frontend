import { ProfileService } from '../api/ProfileService';
import {SupabaseClient} from "@supabase/supabase-js";

declare module '#app' {
    interface NuxtApp {
        $profileService: ProfileService;
        $supabase: SupabaseClient
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $profileService: ProfileService;
        $supabase: SupabaseClient
    }
}

export {};