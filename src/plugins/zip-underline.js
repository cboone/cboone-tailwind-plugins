import plugin from "tailwindcss/plugin";

/**
 * Zip Underline Plugin
 *
 * Animated underline effect for links using ::before and ::after pseudo-elements.
 * The underline scales in from the right on hover and collapses on active.
 *
 * Base classes:
 *   .zip           - Standard animated underline (desktop only, md breakpoint+)
 *   .zip-always    - Animated underline on all hover-capable devices
 *   .zip-appear    - Underline hidden initially, appears on hover
 *   .zip-disappear - Underline visible initially, disappears on hover
 *   .zip-group     - Works with group hover states
 *   .zip-none      - Disables zip effect
 *
 * Icon positioning:
 *   .zip-with-icon-after    - Adjusts for trailing icons
 *   .zip-with-icon-before   - Adjusts for leading icons
 *   .zip-with-icon-6-before - For 6px icons before text
 *   .zip-with-icon-8-before - For 8px icons before text
 *
 * Customization utilities:
 *   zip-bottom-{spacing}  - Adjust bottom position
 *   zip-top-{spacing}     - Adjust top position
 *   zip-initial-{color}   - Change ::before (initial) color
 *   zip-overlay-{color}   - Change ::after (hover) color
 *
 * Colors:
 *   ::before (initial) - amber-200 at 50% opacity
 *   ::after (hover)    - blue-200 at 50% opacity
 *   active state       - blue-300
 *
 * Animation:
 *   transform: scaleX(0) -> scaleX(1)
 *   transition: 0.3s ease-in-out
 *   Respects prefers-reduced-motion
 */
export default plugin(({ addComponents, matchComponents, theme }) => {
  // Base zip styles shared by all variants
  const zipBaseStyles = {
    display: "inline-block",
    position: "relative",
    textDecoration: "none",

    "&::before, &::after": {
      bottom: "0",
      content: "var(--tw-content)",
      display: "block",
      height: "1px",
      left: "0.5px",
      position: "absolute",
      right: "0.5px",
    },

    "&::before": {
      backgroundColor: theme("colors.amber.200"),

      "@media (prefers-contrast: no-preference)": {
        opacity: "0.5",
      },
    },

    "&:active::before": {
      backgroundColor: theme("colors.blue.300"),
      opacity: "1",
    },

    "&::after": {
      backgroundColor: theme("colors.blue.200"),

      "@media (prefers-contrast: no-preference)": {
        opacity: "0.5",
      },

      "@media (prefers-reduced-motion: no-preference)": {
        transform: "scaleX(0)",
        transformOrigin: "right",
        transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
      },
    },

    "&:hover::after, &:focus::after": {
      opacity: "1",

      "@media (prefers-reduced-motion: no-preference)": {
        transform: "scaleX(1)",
        transformOrigin: "left",
      },
    },

    "&:active::after": {
      "@media (prefers-reduced-motion: no-preference)": {
        transform: "scaleX(0)",
        transformOrigin: "right",
      },
    },
  };

  addComponents(
    {
      // Standard zip - only on desktop (md breakpoint+)
      ".zip": {
        "@media (hover: hover) and (pointer: fine) and (min-width: 768px)": {
          ...zipBaseStyles,
        },
      },

      // Always zip - on all hover-capable devices
      ".zip-always": {
        "@media (hover: hover) and (pointer: fine)": {
          ...zipBaseStyles,
        },
      },

      // Appear variant - underline hidden initially
      ".zip-appear": {
        "@media (hover: hover) and (pointer: fine)": {
          "&:not(:active)::before": {
            display: "none",
          },
        },
      },

      // Icon positioning variants
      ".zip-with-icon-after": {
        "@media (hover: hover) and (pointer: fine) and (min-width: 768px)": {
          "&::before, &::after": {
            right: "calc(1.25rem + 1px) !important",
          },
        },
      },

      ".zip-with-icon-before": {
        "@media (hover: hover) and (pointer: fine)": {
          "&::before, &::after": {
            left: "calc(1.25rem + 1px) !important",
          },
        },
      },

      ".zip-with-icon-6-before": {
        "@media (hover: hover) and (pointer: fine)": {
          "&::before, &::after": {
            left: "calc(1.75rem + 1px) !important",
          },
        },
      },

      ".zip-with-icon-8-before": {
        "@media (hover: hover) and (pointer: fine)": {
          "&::before, &::after": {
            left: "calc(2.25rem + 1px) !important",
          },
        },
      },

      // Disappear variant - underline visible initially, hidden on hover
      ".zip-disappear": {
        "@media (hover: hover) and (pointer: fine)": {
          "&::before": {
            display: "none",
          },

          "&::after": {
            "@media (prefers-reduced-motion: no-preference)": {
              transform: "scaleX(0)",
              transformOrigin: "right",
            },
          },
        },
      },

      // Group variant - works with group hover
      ".zip-group": {
        "@media (hover: hover) and (pointer: fine)": {
          ".group:hover &::after, .group:focus &::after": {
            opacity: "1",

            "@media (prefers-reduced-motion: no-preference)": {
              transform: "scaleX(1)",
              transformOrigin: "left",
            },
          },

          ".group:active &::after": {
            "@media (prefers-reduced-motion: no-preference)": {
              transform: "scaleX(0)",
              transformOrigin: "right",
            },
          },
        },
      },

      // Combined group + appear
      ".zip-group.zip-appear": {
        "@media (hover: hover) and (pointer: fine)": {
          ".group:not(:active) &::before": {
            display: "none",
          },
        },
      },

      // Disable zip effect
      ".zip-none": {
        "@media (hover: hover) and (pointer: fine)": {
          "&::before, &::after": {
            display: "none",
          },
        },
      },
    },
    {
      modifiers: true,
    },
  );

  // Position adjustment utilities
  matchComponents(
    {
      "zip-bottom": (value) => ({
        "@media (hover: hover) and (pointer: fine)": {
          "&::before, &::after": {
            bottom: value,
          },
        },
      }),

      "zip-top": (value) => ({
        "@media (hover: hover) and (pointer: fine)": {
          "&::before, &::after": {
            top: value,
          },
        },
      }),
    },
    {
      modifiers: true,
      values: theme("spacing"),
    },
  );

  // Color customization utilities
  matchComponents(
    {
      "zip-overlay": (value) => ({
        "@media (hover: hover) and (pointer: fine)": {
          "&::after": {
            backgroundColor: value,
          },
        },
      }),

      "zip-initial": (value) => ({
        "@media (hover: hover) and (pointer: fine)": {
          "&::before": {
            backgroundColor: value,
          },
        },
      }),

      "zip-initial-always": (value) => ({
        "@media (hover: hover) and (pointer: fine)": {
          "&::before": {
            backgroundColor: value,
          },
        },
      }),
    },
    {
      modifiers: true,
      values: theme("colors"),
    },
  );
});
