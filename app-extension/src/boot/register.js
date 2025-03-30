import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-blurr-mode'

export default boot(({ app, ssrContext }) => {
  app.use(VuePlugin, { ssrContext })
})
