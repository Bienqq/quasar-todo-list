<template>
  <div class="row q-mb-sm">
    <q-input outlined
             label="Due date"
             :model-value="dueDate"
             @update:model-value="$emit('update:dueDate', $event)"
             class="col">
      <template v-slot:append>
        <q-icon name="close"
                v-if="dueDate"
                @click="$emit('clear')"
                class="cursor-pointer"/>
        <q-icon name="event"
                class="cursor-pointer">

          <q-popup-proxy ref="qDateProxy"
                         transition-show="scale"
                         transition-hide="scale">

            <q-date :model-value="dueDate"
                    @update:model-value="$emit('update:dueDate', $event)">
              <div class="row items-center justify-end">
                <q-btn v-close-popup
                       label="OK"
                       color="primary"
                       flat/>
              </div>
            </q-date>

          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ModalDueDate",
  props: {
    dueDate: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
