import { boot } from 'quasar/wrappers'
import BlurrPlugin from 'ui' // "ui" is aliased in quasar.conf.js

export default boot(({ app, ssrContext }) => {
  app.use(BlurrPlugin, {ssrContext})
})
