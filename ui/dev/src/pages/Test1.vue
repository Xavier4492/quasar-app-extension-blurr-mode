<template>
  <q-page padding>
    <div class="text-center" >
      <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="Mountains" class="q-ma-md">
    </div>

    <p>
      typeof $q.blurr: {{ typeof $q.blurr }}<br>
      $q.blurr.isActive: {{ $q.blurr.isActive }}<br>
      $q.blurr.mode: {{ $q.blurr.mode }}<br>
    </p>

    <div class="text-center">
      <q-btn
      round
      unelevated
      size="sm"
      class="q-mx-sm"
      :text-color="$q.blurr.isActive ? 'light' : 'grey-5'"
      :icon="$q.blurr.isActive ? 'blur_off' : 'blur_on'"
      :aria-label="$q.blurr.isActive ? 'Remove blur from images' : 'Apply blur to images'"
      @click="$q.blurr.isActive ? $q.blurr.set(false) : $q.blurr.set(true)"
    >
      <q-tooltip v-if="!$q.platform.is.mobile" :delay="1000">
        {{ $q.blurr.isActive ? 'Remove blur' : 'Apply blur' }}
      </q-tooltip>
    </q-btn>    
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()
    return {}
  }
}
</script>
