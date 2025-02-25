import type {ApiKey} from "../types";
import {SupabaseClient} from "@supabase/supabase-js";

class ProfileAPI {
    private supabase: SupabaseClient;
    private tableName: string;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
        this.tableName = 'profiles';
    }

    getProfile(userId: string) {
        return this.supabase
            .from(this.tableName)
            .select('*')
            .eq('id', userId)
            .single();
    }

    addApiKey(userId: string, apiKey: ApiKey) {
        return this.supabase
            .from(this.tableName)
            .update({
                keys: `(COALESCE(keys, '[]'::jsonb) || '${JSON.stringify([apiKey])}'::jsonb)`
            })
            .eq('id', userId)
            .single();  // Returns the updated row as an object
    }

    deleteApiKey(userId: string, keyToDelete: ApiKey) {
        return this.supabase
            .from(this.tableName)
            .update({
                keys: `(
                SELECT jsonb_agg(key_item)
                FROM jsonb_array_elements(coalesce(keys, '[]'::jsonb)) key_item
                WHERE key_item->>'key' != '${keyToDelete}'
            )`
            })
            .eq('id', userId);
    }
}

export default ProfileAPI