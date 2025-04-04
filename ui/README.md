# Component BlurrMode

[![npm](https://img.shields.io/npm/v/quasar-ui-blurr-mode.svg?label=quasar-ui-blurr-mode)](https://www.npmjs.com/package/quasar-ui-blurr-mode)
[![npm](https://img.shields.io/npm/dt/quasar-ui-blurr-mode.svg)](https://www.npmjs.com/package/quasar-ui-blurr-mode)

**Compatible with Quasar UI v2 and Vue 3**.


# Component BlurrMode
> This component provide a base steel for a blurr mode in your app.

```sass
body.body--blurr
  img
    filter: blur(12px) !important
    pointer-events: none !important
    -webkit-user-select: none !important
    user-select: none !important

  .q-blurr-content
    filter: blur(4px) !important
    pointer-events: none !important
    -webkit-user-select: none !important
    user-select: none !important

```

# Usage

## Quasar CLI project


Install the [App Extension](../app-extension).

**OR**:


Create and register a boot file:

```js
import Vue from 'vue'
import Plugin from 'quasar-ui-blurr-mode'
import 'quasar-ui-blurr-mode/dist/index.css'

Vue.use(Plugin, { ssrContext }) // ctx._meta used by SSR
```

**OR**:

```html
<style src="quasar-ui-blurr-mode/dist/index.css"></style>
```

# Setup
```bash
$ yarn
```

# Developing
```bash
# start dev in SPA mode
$ yarn dev

# start dev in UMD mode
$ yarn dev:umd

# start dev in SSR mode
$ yarn dev:ssr

# start dev in Cordova iOS mode
$ yarn dev:ios

# start dev in Cordova Android mode
$ yarn dev:android

# start dev in Electron mode
$ yarn dev:electron
```

# Building package
```bash
$ yarn build
```

# Adding Testing Components
in the `ui/dev/src/pages` you can add Vue files to test your component/directive. When using `yarn dev` to build the UI, any pages in that location will automatically be picked up by dynamic routing and added to the test page.

# Adding Assets
If you have a component that has assets, like language or icon-sets, you will need to provide these for UMD. In the `ui/build/script.javascript.js` file, you will find a couple of commented out commands that call `addAssets`. Uncomment what you need and add your assets to have them be built and put into the `ui/dist` folder.

# Donate
If you appreciate the work that went into this, please consider [donating to Quasar](https://donate.quasar.dev).

# License
MIT (c) Xavier4492 <xavierloue@gmail.com>
