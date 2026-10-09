export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

/** Format a number with thousands separators. */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}
