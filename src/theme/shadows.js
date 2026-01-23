/**
 * Shadow Configuration
 *
 * shadowWithInner - Combined outer shadow with inset highlight for 3D button effect
 *   Uses --tw-shadow-color for outer shadow color
 *   Uses --ch-inset-shadow-color for inset (default: white 20%)
 *
 * textShadow - Text shadow values for headings
 *   DEFAULT uses donkey-900 for subtle depth on dark backgrounds
 *
 * boxShadow - Even shadows (centered, no offset)
 *   shadow-even-sm - 25px blur
 *   shadow-even-lg - 35px blur
 */
export const shadowWithInner = {
  sm: "0 0 15px -5px var(--tw-shadow-color), inset 0 0 1px 1px var(--ch-inset-shadow-color)",
  "sm-md": "0 0 15px -5px var(--tw-shadow-color), inset 0 0 1px 2px var(--ch-inset-shadow-color)",
  "sm-lg": "0 0 15px -5px var(--tw-shadow-color), inset 0 0 1px 4px var(--ch-inset-shadow-color)",
  md: "0 0 25px -5px var(--tw-shadow-color), inset 0 0 1px 1px var(--ch-inset-shadow-color)",
  "md-md": "0 0 25px -5px var(--tw-shadow-color), inset 0 1px 2px var(--ch-inset-shadow-color)",
  DEFAULT: "0 0 35px -5px var(--tw-shadow-color), inset 0 0 1px 1px var(--ch-inset-shadow-color)",
  lg: "0 0 35px -5px var(--tw-shadow-color), inset 0 0 1px 1px var(--ch-inset-shadow-color)",
  "lg-md": "0 0 35px -5px var(--tw-shadow-color), inset 0 1px 2px var(--ch-inset-shadow-color)",
  "lg-lg-10%": "0 0 35px -5px var(--tw-shadow-color), inset 0 1px 4px rgb(255 255 255 / 0.1)",
};

export const textShadow = {
  DEFAULT: "1px 1px 0 rgb(31, 33, 35)", // donkey-900
  "donkey-600": "1px 1px 0 rgb(73, 80, 84)",
  "donkey-900": "1px 1px 0 rgb(31, 33, 35)",
  "donkey-950": "1px 1px 0 rgb(9, 10, 10)",
  none: "0 0 0 #000",
  white: "1px 1px 0 rgb(255, 255, 255)",
};

export const boxShadow = {
  "even-sm": "0 0 25px -5px rgb(0 0 0 / 0.5)",
  "even-lg": "0 0 35px -5px rgb(0 0 0 / 0.5)",
};
