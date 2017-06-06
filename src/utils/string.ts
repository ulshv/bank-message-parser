/** Trim too long messages using '...' separator in the middle */
export const trimText = (
  text: string,
  limit: number = 55,
  separator: string = ' ... '
): string => {
  if (text.length <= limit) return text;
  const half = Math.round((limit - separator.length) / 2)
  return text.substr(0, half) + separator + text.substr(text.length - half, text.length);
}

/** Returns string with capitalized first character */
export const capitalize = (str?: string) => str && str.charAt(0).toUpperCase() + str.slice(1)
