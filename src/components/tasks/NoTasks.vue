<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check"
              color="primary"/>
    </template>
    No tasks to do today!
    <template v-slot:action>
      <q-btn flat
             @click="$emit('showAddTask')"
             color="primary"
             label="Add task"/>
    </template>
  </q-banner>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NoTasks"
})
</script>

<style scoped>

</style>
