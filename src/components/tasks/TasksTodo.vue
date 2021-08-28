<template>
  <list-header bg-color="bg-orange-4">Todo</list-header>
  <q-list separator
          bordered>
    <task v-for="(task, key) in tasksTodo"
          :task="task"
          :id="key"/>
  </q-list>
</template>

<script>
import {defineComponent} from 'vue'
import Task from "components/tasks/Task";
import ListHeader from "components/shared/ListHeader";

export default defineComponent({
  name: "TasksTodo",
  components: {
    'task': Task,
    'list-header': ListHeader
  },
  props: {
    tasksTodo: {
      type: Object,
      required: true,
    }
  }
})
</script>

<style scoped>

</style>
