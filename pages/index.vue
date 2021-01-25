<template lang="pug">
  div
    p Hello World!
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'index',
  layout: 'default',
  props: {},

  setup() {
    return {}
  }
})
</script>

<style lang="sass"></style>
