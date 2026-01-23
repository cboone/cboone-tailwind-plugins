import plugin from "tailwindcss/plugin";

/**
 * Shadow Utilities Plugin
 *
 * Provides custom utilities for shadows, text effects, and cursors.
 *
 * Shadow utilities:
 *   shadow-with-inner-{size}  - Combined outer shadow with inset highlight
 *                               Uses --tw-shadow-color for outer shadow
 *                               Uses --ch-inset-shadow-color for inset (default: white 20%)
 *
 * Text shadow utilities:
 *   text-shadow              - Default text shadow (donkey-900)
 *   text-shadow-{color}      - Text shadow with theme color
 *
 * Cursor utilities:
 *   cursor-auto      - Auto cursor
 *   cursor-hand      - Pointer cursor
 *   cursor-zoom-in   - Zoom in cursor
 *   cursor-zoom-out  - Zoom out cursor
 *
 * Text wrap utilities:
 *   .balanced  - text-wrap: balance (even line lengths)
 *   .pretty    - text-wrap: pretty (better paragraph breaks)
 */
export default plugin(({ addComponents, matchComponents, theme }) => {
  // Shadow with inner highlight utilities
  matchComponents(
    {
      "shadow-with-inner": (value) => ({
        "--ch-inset-shadow-color": "rgb(255 255 255 / 0.2)",
        "box-shadow": value,
      }),
    },
    {
      modifiers: true,
      values: theme("shadowWithInner"),
    },
  );

  // Text shadow utilities
  matchComponents(
    {
      "text-shadow": (value) => ({
        "text-shadow": value,
      }),
    },
    {
      modifiers: true,
      values: theme("textShadow"),
    },
  );

  // Cursor utilities
  matchComponents(
    {
      cursor: (value) => ({ cursor: value }),
    },
    {
      modifiers: true,
      values: theme("cursors"),
    },
  );

  // Text wrap utilities
  addComponents({
    ".balanced": {
      "text-wrap": "balance",
    },
    ".pretty": {
      "text-wrap": "pretty",
    },
  });
});
