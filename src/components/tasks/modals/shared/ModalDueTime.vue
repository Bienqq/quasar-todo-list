<template>
  <div class="row q-mb-sm">
    <q-input outlined
             label="Due time"
             :model-value="dueTime"
             @update:model-value="$emit('update:dueTime', $event)"
             class="col">
      <template v-slot:append>
        <q-icon name="close"
                v-if="dueTime"
                @click="$emit('update:dueTime', '')"
                class="cursor-pointer"/>
        <q-icon name="access_time"
                class="cursor-pointer">
          <q-popup-proxy transition-show="scale"
                         transition-hide="scale">
            <q-time :model-value="dueTime"
                    @update:model-value="$emit('update:dueTime', $event)">
              <div class="row items-center justify-end">
                <q-btn v-close-popup
                       label="OK"
                       color="primary"
                       flat/>
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ModalDueTime",
  props: {
    dueTime: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
