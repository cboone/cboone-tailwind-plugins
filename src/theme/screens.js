import defaultTheme from "tailwindcss/defaultTheme";

/**
 * Screen Breakpoints and Layout Configuration
 *
 * Breakpoints:
 *   xs  - 476px  (small mobile)
 *   sm  - 640px  (large mobile / small tablet)
 *   md  - 768px  (tablet)
 *   ml  - 896px  (large tablet, custom)
 *   lg  - 1024px (desktop, navigation threshold)
 *   xl  - 1280px (large desktop)
 *   2xl - 1536px (extra large)
 *   3xl - 2048px (ultrawide, custom)
 *
 * Aspect ratios for responsive images and video.
 */
export const screens = {
  // xxs < 476px (implicit default)
  xs: "476px",
  sm: defaultTheme.screens.sm,
  md: defaultTheme.screens.md,
  ml: "896px",
  lg: defaultTheme.screens.lg,
  xl: defaultTheme.screens.xl,
  "2xl": defaultTheme.screens["2xl"],
  "3xl": "2048px",
};

export const aspectRatio = {
  "1/1": "1 / 1",
  "2/3": "2 / 3",
  "3/2": "3 / 2",
  "3/4": "3 / 4",
  "4/3": "4 / 3",
  "4/5": "4 / 5",
  "5/4": "5 / 4",
  "9/16": "9 / 16",
  "16/9": "16 / 9",
};
