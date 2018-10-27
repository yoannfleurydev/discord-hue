/**
 * Enum for the emoji used by the application.
 */
enum Emoji {
  BULB = "bulb",
  OCTAGONAL_SIGN = "octagonal_sign",
  NO_ENTRY_SIGN = "no_entry_sign"
}

export function buildEmoji(emoji: Emoji): string {
  return `:${emoji}:`;
}

export default Emoji;
