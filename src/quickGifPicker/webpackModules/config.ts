export function getDefaultCategory(): string | null {
  const val = moonlight.getConfig("quickGifPicker")?.category;
  if (!val || val === "Home") return null;
  return val;
}
