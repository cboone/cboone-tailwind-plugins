# @cboone/tailwind-ch-plugins

Custom Tailwind CSS plugins and theme extensions.

## Installation

```bash
npm install @cboone/tailwind-ch-plugins
```

**Note:** This package is published to GitHub Packages. Configure your `.npmrc`:

```
@cboone:registry=https://npm.pkg.github.com
```

## Usage

### All Plugins

```javascript
import {
  childSelectors,
  mediaVariants,
  shadowUtilities,
  zipUnderline,
} from "@cboone/tailwind-ch-plugins";

export default {
  plugins: [childSelectors, mediaVariants, shadowUtilities, zipUnderline],
};
```

### Individual Plugins

```javascript
import childSelectors from "@cboone/tailwind-ch-plugins/plugins/child-selectors";

export default {
  plugins: [childSelectors],
};
```

### Theme Extensions

```javascript
import {
  aspectRatio,
  boxShadow,
  colors,
  fontFamily,
  fontSize,
  screens,
  shadowWithInner,
  textShadow,
} from "@cboone/tailwind-ch-plugins/theme";

export default {
  theme: {
    extend: {
      aspectRatio,
      boxShadow,
      colors,
      fontFamily,
      fontSize,
      screens,
      shadowWithInner,
      textShadow,
    },
  },
};
```

## Plugins

### Child Selectors

Custom variants for targeting child and descendant elements.

```html
<!-- Direct children -->
<div class=">p:text-gray-600">
  <p>Styled paragraph</p>
</div>

<!-- Descendants -->
<div class="~>a:text-blue-500">
  <nav><a href="#">Styled link</a></nav>
</div>
```

**Variants:**
- `>*`, `>a`, `>button`, `>div`, `>h2`, `>p` - Direct child selectors
- `>div:first`, `>p:last` - With pseudo-classes
- `~>a`, `~>img`, `~>p`, `~>ol`, `~>ul` - Descendant selectors
- `~>p>a`, `>p>a` - Nested combinations

### Media Variants

Media query and state-based variants.

```html
<button class="hover-safe:bg-blue-600">
  Only hover on desktop
</button>
```

**Variants:**
- `hover-safe` - Only on devices with hover and fine pointer
- `contrast-safe` - Only when no contrast preference is set
- `not:first-of-type` - `:not(:first-of-type)`
- `zoom-{0-22}` - Map zoom level context

### Shadow Utilities

Shadow, text-shadow, cursor, and text-wrap utilities.

```html
<button class="shadow-with-inner-lg shadow-blue-500/50">
  3D button effect
</button>

<h1 class="text-shadow">
  Heading with shadow
</h1>
```

**Utilities:**
- `shadow-with-inner-{sm,md,lg}` - Combined outer + inset shadow
- `text-shadow`, `text-shadow-{color}` - Text shadows
- `.balanced`, `.pretty` - Text wrap utilities

### Zip Underline

Animated underline effect for links.

```html
<a href="#" class="zip">
  Hover for animated underline
</a>

<a href="#" class="zip-always zip-appear">
  Appears on hover
</a>
```

**Classes:**
- `.zip` - Standard animated underline (desktop only)
- `.zip-always` - On all hover-capable devices
- `.zip-appear` - Hidden initially, appears on hover
- `.zip-disappear` - Visible initially, disappears on hover
- `.zip-group` - Works with group hover
- `.zip-none` - Disables effect

**Customization:**
- `zip-bottom-{spacing}`, `zip-top-{spacing}` - Position adjustment
- `zip-initial-{color}`, `zip-overlay-{color}` - Color customization

## Theme

### Colors

Donkey grayscale palette for dark themes.

```javascript
colors: {
  donkey: {
    50: "#eff2f3",
    // ... 100-950
    950: "#090a0a",
  }
}
```

### Screens

Custom breakpoints including `xs` (476px), `ml` (896px), and `3xl` (2048px).

### Typography

Custom font families (`condensed`, `title`) and sizes (`2xs`, `2.5xl`).

### Shadows

- `shadowWithInner` - Combined outer + inset shadows
- `textShadow` - Text shadow values
- `boxShadow` - Centered even shadows

## License

MIT
