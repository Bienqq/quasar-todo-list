<template>
  <q-banner inline-actions
            dense
            :class="bgColor"
            class="list-header text-white text-center">
    <span class="text-bold text-subtitle1"><slot></slot>
    </span>
  </q-banner>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ListHeader",
  props: {
    bgColor: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.list-header {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
