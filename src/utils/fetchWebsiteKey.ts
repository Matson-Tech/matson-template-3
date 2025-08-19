export async function fetchWebsiteKey(): Promise<string> {
  try {
    const res = await fetch("/api/getWebsiteKey");
    if (!res.ok) throw new Error("Failed to fetch website key");
    const { websiteKey } = await res.json();
    return websiteKey;
  } catch (e) {
    console.error("Could not fetch website key", e);
    return "default";
  }
}
