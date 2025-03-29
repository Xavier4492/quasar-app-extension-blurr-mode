import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'BlurrMode',

  setup () {
    return () => h(QBadge, {
      class: 'BlurrMode',
      label: 'BlurrMode'
    })
  }
}
