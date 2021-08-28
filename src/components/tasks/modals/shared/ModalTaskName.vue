<template>
  <div class="row q-mb-sm">
    <q-input outlined
             label="Task name"
             :model-value="name"
             @update:model-value="$emit('update:name', $event)"
             :rules="[val => !!val || 'Field is required']"
             ref="name"
             autofocus
             class="col">
      <template v-slot:append>
        <q-icon name="close"
                v-if="name"
                @click="$emit('update:name', '')"
                class="cursor-pointer"/>
      </template>

    </q-input>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ModalTaskName",
  props: {
    name: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
