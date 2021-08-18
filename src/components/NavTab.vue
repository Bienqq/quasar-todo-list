<template>
  <q-route-tab :icon="icon"
               :label="label"
               :to="to"/>
</template>

<script>
export default {
  name: "NavTab",
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
  },
}
</script>

<style scoped>

</style>
