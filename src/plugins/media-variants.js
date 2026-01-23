import plugin from "tailwindcss/plugin";

/**
 * Media Variants Plugin
 *
 * Provides custom variants for media queries and state-based selectors.
 *
 * Media query variants:
 *   hover-safe     - Only applies on devices with hover and fine pointer
 *   contrast-safe  - Only applies when no contrast preference is set
 *
 * State variants:
 *   navbar-expanded     - When navbar toggle has aria-expanded="true"
 *   not:first-of-type   - :not(:first-of-type)
 *
 * Context variants:
 *   zoom-{0-22}  - Matches .zoom-{n} ancestor (for map zoom levels)
 */
export default plugin(({ addVariant, matchVariant }) => {
  // Media query variants
  addVariant("hover-safe", "@media (hover: hover) and (pointer: fine)");
  addVariant("contrast-safe", "@media (prefers-contrast: no-preference)");

  // State variants
  addVariant(
    "navbar-expanded",
    "[x-navbar-toggle][aria-expanded='true'] + [x-ref='navbar-menu'] + [data-tippy-root] &",
  );
  addVariant("not:first-of-type", "&:not(:first-of-type)");

  // Map zoom level context variants (0-22)
  matchVariant("zoom", (value) => `.zoom-${value} &`, {
    values: Object.fromEntries(
      Array.from({ length: 23 }, (_, index) => [index.toString(), index.toString()]),
    ),
  });
});
