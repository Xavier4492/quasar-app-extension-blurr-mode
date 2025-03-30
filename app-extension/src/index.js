/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 */

function extendConf (conf, api) {
  // we push to /quasar.config file > framework > plugins:

  if (conf.framework?.plugins?.indexOf('Meta') === -1) {
    conf.framework.plugins.push('Meta')
  }

  // register our boot file
  conf.boot.push('~quasar-app-extension-blurr-mode/src/boot/register.js')

  if (api.hasWebpack) {
    // make sure app extension files & ui package gets transpiled
    const transpileTarget = (
      conf.build.webpackTranspileDependencies // q/app-webpack >= v4
      || conf.build.transpileDependencies // q/app-webpack v3
    )
    transpileTarget.push(/quasar-app-extension-blurr-mode[\\/]src/)
    transpileTarget.push(/quasar-ui-blurr-mode[\\/]src/)
  }

  // make sure the stylesheet goes through webpack to avoid SSR issues
  conf.css.push('~quasar-ui-blurr-mode/src/index.sass')
}

export default function (api) {
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app-*" CLI
  api.compatibleWith('quasar', '^2.0.0')

  if (api.hasVite) {
    api.compatibleWith('@quasar/app-vite', '^1.5.0 || ^2.0.0')
  }
  else if (api.hasWebpack) {
    api.compatibleWith('@quasar/app-webpack', '^3.10.0 || ^4.0.0')
  }


  // Uncomment the line below if you provide a JSON API for your component
  // api.registerDescribeApi('$q.blurr', '~quasar-ui-blurr-mode/src/components/BlurrMode.json')


  // We extend /quasar.conf.js
  api.extendQuasarConf(extendConf)
}
