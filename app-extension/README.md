# Quasar App Extension blurr-mode

> Blurr Mode is a supplemental display mode designed to obscure specific content such as NSFW material or distracting elements by applying a blur effect across targeted UI areas. While maintaining basic readability and structure, this mode helps protect users from potentially sensitive visuals and offers a more controlled browsing experience.

[![npm](https://img.shields.io/npm/v/quasar-app-extension-blurr-mode.svg?label=quasar-app-extension-blurr-mode)](https://www.npmjs.com/package/quasar-app-extension-blurr-mode)
[![npm](https://img.shields.io/npm/dt/quasar-app-extension-blurr-mode.svg)](https://www.npmjs.com/package/quasar-app-extension-blurr-mode)

# Install
```bash
quasar ext add blurr-mode
```
Quasar CLI will retrieve it from NPM and install the extension.

## Prompts

> If your app extension uses prompts, explain them here, otherwise remove this section and remove prompts.js file.

# Uninstall
```bash
quasar ext remove blurr-mode
```

# Info
This Quasar App Extension enables a **Blurring Mode** in your app, allowing you to visually obscure specific parts of the UI—such as NSFW content or distracting elements—by applying a customizable blur effect.

The extension injects `$q.blurr` into the Quasar context, providing both **reactive state tracking** and **runtime control** with:

- `isActive` – A reactive boolean indicating whether blur mode is currently active.
- `mode` – Can be `"true"` or `"false"`.

## Features

- ✅ SSR-ready with proper body class injection
- ✅ Runtime toggling of blur mode
- ✅ Configurable default mode via `quasar.conf.js`
- ✅ CSS utility classes (`body--blurr`, `body--no--blurr`) to control blurred elements easily

## Example Config (`quasar.conf.js`)
```js
// quasar.conf.js
module.exports = function (ctx) {
  return {
    // ...
    framework: {
      config: {
        blurr: true // or false (default value)
      }
    }
  }
}
```

## CSS Usage

Apply blur effects using the body classes injected by the plugin:

```scss
body.body--blurr img {
  filter: blur(12px);
  pointer-events: none;
  user-select: none;
}

body.body--blurr .q-blurr-content {
  filter: blur(4px);
  pointer-events: none;
  user-select: none;
}
```

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).

# License
MIT (c) Xavier4492 <xavierloue@gmail.com>
