/**
 * @cboone/tailwind-plugins
 *
 * Custom Tailwind CSS plugins and theme extensions.
 *
 * Plugins:
 *   - childSelectors: Custom child/descendant selector variants
 *   - mediaVariants: Media query and state-based variants
 *   - shadowUtilities: Shadow, text-shadow, cursor, text-wrap utilities
 *   - zipUnderline: Animated underline link effect
 *
 * Theme:
 *   - colors: Donkey grayscale palette
 *   - fontFamily, fontSize: Typography configuration
 *   - shadowWithInner, textShadow, boxShadow: Shadow values
 *   - screens, aspectRatio: Layout breakpoints and ratios
 */

// Plugins
export { default as childSelectors } from "./plugins/child-selectors.js";
export { default as mediaVariants } from "./plugins/media-variants.js";
export { default as shadowUtilities } from "./plugins/shadow-utilities.js";
export { default as zipUnderline } from "./plugins/zip-underline.js";

// Theme
export { colors } from "./theme/colors.js";
export { fontFamily, fontSize } from "./theme/typography.js";
export { boxShadow, shadowWithInner, textShadow } from "./theme/shadows.js";
export { aspectRatio, screens } from "./theme/screens.js";
