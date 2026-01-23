import defaultTheme from "tailwindcss/defaultTheme";

/**
 * Typography Configuration
 *
 * Font families:
 *   font-sans       - Frutiger (body text)
 *   font-condensed  - Frutiger Condensed (headings, buttons)
 *   font-title      - TASA Explorer (site name only)
 *   font-mono       - System monospace (code)
 *   font-serif      - System serif (rarely used)
 *
 * Custom font sizes:
 *   text-2xs   - 0.7rem (tiny text)
 *   text-2.5xl - 1.75rem (between 2xl and 3xl)
 */
export const fontFamily = {
  condensed: ["Frutiger Condensed", "Frutiger", ...defaultTheme.fontFamily.sans],
  mono: [...defaultTheme.fontFamily.mono],
  sans: ["Frutiger", ...defaultTheme.fontFamily.sans],
  serif: [...defaultTheme.fontFamily.serif],
  title: ["TASA Explorer", "Frutiger Condensed", "Frutiger", ...defaultTheme.fontFamily.sans],
};

export const fontSize = {
  "2xs": ["0.7rem", { lineHeight: "1rem" }],
  ...defaultTheme.fontSize,
  "2.5xl": ["1.75rem", "2.125rem"],
};
