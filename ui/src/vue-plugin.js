import { reactive } from 'vue'

const state = process.env.SERVER
  ? { isActive: false, mode: false }
  : reactive({ isActive: false, mode: false })

const BlurrInstance = {
  get isActive() {
    return state.isActive
  },
  get mode() {
    return state.mode
  },
  set(val) {
    if (process.env.SERVER) return
    state.mode = val
    state.isActive = val === true
    document.body.classList.remove(`body--${val === true ? 'no--blurr' : 'blurr'}`)
    document.body.classList.add(`body--${val === true ? 'blurr' : 'no--blurr'}`)
  },
  toggle() {
    if (!process.env.SERVER) {
      this.set(state.isActive === false)
    }
  }
}

function install(app, options = {}) {
  const { ssrContext } = options
  const $q = app.config.globalProperties.$q
  const blurrConfig = $q?.config?.blurr !== undefined ? $q.config.blurr : false

  if (process.env.SERVER) {
    state.isActive = blurrConfig === true
    if ($q) {
      // Remplacer la méthode set pour adapter la gestion SSR via ssrContext._meta.bodyClasses
      BlurrInstance.set = (val) => {
        if (ssrContext && ssrContext._meta && ssrContext._meta.bodyClasses) {
          ssrContext._meta.bodyClasses = ssrContext._meta.bodyClasses
            .replace(' body--no--blurr', '')
            .replace(' body--blurr', '') + ` body--${val === true ? 'blurr' : 'no--blurr'}`
        }
        state.isActive = val === true
        state.mode = val
      }
      $q.blurr = BlurrInstance
      $q.blurr.set(blurrConfig)
    }
  }
  else {
    if ($q) {
      $q.blurr = BlurrInstance
      BlurrInstance.set(blurrConfig)
    }
  }
  // app.config.globalProperties.blurr = BlurrInstance
  // ^^^ This line is not needed because we are using $q.blurr instead of $blurr (global property)
}

const version = __UI_VERSION__

export {
  version,
  install
}
