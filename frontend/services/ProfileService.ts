import type { ApiKey } from "../types";
import ProfileAPI from "../api/ProfileApi";
import {defineNuxtPlugin, useNuxtApp} from "nuxt/app";
import {SupabaseClient} from "@supabase/supabase-js";
import {AccessLevel} from "../types";

export class ProfileService {

    private profileApi: ProfileAPI;

    constructor(profileApi: ProfileAPI) {
        this.profileApi = profileApi;
    }

    async getProfile(userId: string) {
        return this.profileApi.getProfile(userId)
            .then((response: any) => {
                return { data: response.data, error: null, success: true };
            })
    }

    async addApiKey(key: string, userId: string) {
        const apiKey = { key, access: AccessLevel.full } as ApiKey
        return this.profileApi.addApiKey(userId, apiKey)
    }

    async removeApiKey(key: string, userId: string) {
        const apiKey = { key, access: AccessLevel.full } as ApiKey
        return this.profileApi.deleteApiKey(userId, apiKey)
    }

    async getApiKeys(userId: string) {
        return this.getProfile(userId)
            .then(result => {
                if (!result.success || !result.data) {
                    return { data: null, error: result.error || new Error('Failed to get profile'), success: false };
                }

                const keys = result.data.keys || [];
                return { data: keys, error: null, success: true };
            })
            .catch(error => {
                console.error('Error getting API keys:', error);
                return { data: null, error, success: false };
            });
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    // Create the API with the supabase instance from nuxtApp
    const { $supabase } = useNuxtApp()
    const supabase = $supabase as SupabaseClient

    const profileApi = new ProfileAPI(supabase);

    // Create the service with the API
    const profileService = new ProfileService(profileApi);

    // Provide both to the application
    return {
        provide: {
            profileService: profileService
        }
    }
})