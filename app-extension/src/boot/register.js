import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-blurr-mode'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
