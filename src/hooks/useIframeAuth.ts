import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useIframeAuth() {
  const [iframeTokens, setIframeTokens] = useState<{ accessToken?: string; refreshToken?: string } | null>(null);

  // Listen for tokens from parent and set state
  useEffect(() => {
    if (window.self !== window.top) {
      const handler = (event: MessageEvent) => {
        if (event.data?.type === "SUPABASE_TOKENS") {
          setIframeTokens({
            accessToken: event.data.access_token,
            refreshToken: event.data.refresh_token,
          });
        }
      };
      window.addEventListener("message", handler);

      // Ask parent to send tokens
      window.parent.postMessage({ type: "REQUEST_SUPABASE_TOKENS" }, "*");

      return () => {
        window.removeEventListener("message", handler);
      };
    }
  }, []);
const receiveIframeTokens = (): Promise<{ accessToken: string; refreshToken?: string }> => {
  return new Promise((resolve) => {
    const handler = (event: MessageEvent) => {
      if (event.data?.type === "SUPABASE_TOKENS") {
        window.removeEventListener("message", handler);
        resolve({
          accessToken: event.data.access_token,
          refreshToken: event.data.refresh_token,
        });
      }
    };
    window.addEventListener("message", handler);

    // Ask parent for tokens immediately
    window.parent.postMessage({ type: "REQUEST_SUPABASE_TOKENS" }, "*");

    // Optional timeout in case no response arrives
    setTimeout(() => {
      window.removeEventListener("message", handler);
      resolve({ accessToken: "", refreshToken: "" });
    }, 5000);
  });
};

  // Function to authenticate using tokens from parent
  const authenticateWithSupabase = useCallback(async () => {
    if (!iframeTokens?.accessToken) {
      console.warn("No iframe access token available yet for authentication.");
      return null;
    }

    try {
      const { data, error } = await supabase.auth.setSession({
        access_token: iframeTokens.accessToken,
        refresh_token: iframeTokens.refreshToken || "",
      });
      if (error) {
        console.error("Iframe token authentication failed:", error);
        return null;
      }
      return data.session?.user || null;
    } catch (err) {
      console.error("Error during iframe auth:", err);
      return null;
    }
  }, [iframeTokens]);

  return { iframeTokens, authenticateWithSupabase };
}
