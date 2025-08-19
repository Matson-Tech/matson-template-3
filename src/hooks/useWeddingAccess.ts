

import { supabase } from "@/integrations/supabase/client";

export const resolveUserIdFromUsername = async (username: string): Promise<string | null> => {
    const { data, error } = await supabase
        .from("user_profile")
        .select("user_id")
        .eq("username", username)
        .maybeSingle();

    if (error) {
        console.error("Error fetching user_id from username:", error);
        return null;
    }
    return data?.user_id || null;
};

export const validateTokensAndGetUser = async (
    accessToken: string,
    refreshToken?: string
): Promise<{ userId: string | null; userEmail: string | null }> => {
    const { data, error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken || "",
    });

    if (error || !data.session?.user) {
        console.error("Token validation failed:", error);
        return { userId: null, userEmail: null };
    }

    return {
        userId: data.session.user.id,
        userEmail: data.session.user.email || null,
    };
};

export const loadWeddingDataByUserId = async (userId: string) => {
    const { data, error } = await supabase
        .from("web_entries")
        .select("web_data")
        .eq("user_id", userId)
        .maybeSingle();

    if (error) {
        console.error("Error loading wedding data:", error);
        return null;
    }

    return data?.web_data || null;
};

export const loadWishesByUserId = async (userId: string) => {
    const { data, error } = await supabase
        .from("guest_wishes")
        .select("id, name, message")
        .eq("variant", userId)
        .order("created_at", { ascending: false })
        .limit(3);

    if (error) {
        console.error("Error loading wishes:", error);
        return [];
    }

    return data || [];
};
