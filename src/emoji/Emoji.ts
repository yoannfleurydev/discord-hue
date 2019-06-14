/**
 * Enum for the emoji used by the application.
 */
enum Emoji {
  BOOM = "boom",
  BULB = "bulb",
  NO_ENTRY_SIGN = "no_entry_sign",
  OCTAGONAL_SIGN = "octagonal_sign",
  WORRIED = "worried"
}

export function buildEmoji(emoji: Emoji): string {
  return `:${emoji}:`;
}

export function getRealEmoji(emoji: Emoji): string {
  const MAPPING = {
    [Emoji.BOOM]: "💥",
    [Emoji.BULB]: "💡",
    [Emoji.NO_ENTRY_SIGN]: "🚫",
    [Emoji.OCTAGONAL_SIGN]: "🛑",
    [Emoji.WORRIED]: "😟"
  };

  return MAPPING[emoji];
}

export default Emoji;
