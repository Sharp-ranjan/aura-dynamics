export function normalizeLegalSlug(slug: string): string {
  const aliases: Record<string, string> = {
    privacy: "privacy-policy",
    terms: "terms-of-service",
  };
  return aliases[slug] ?? slug;
}