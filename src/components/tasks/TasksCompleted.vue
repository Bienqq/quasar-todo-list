<template>
  <list-header bg-color="bg-green-4"
               class="q-mt-lg">Completed
  </list-header>
  <q-list separator
          bordered>
    <task v-for="(task, key) in tasksCompleted"
          :task="task"
          :id="key"/>
  </q-list>
</template>

<script>
import {defineComponent} from 'vue'
import Task from "components/tasks/Task";
import ListHeader from "components/shared/ListHeader";

export default defineComponent({
  name: "TasksCompleted",
  components: {
    'task': Task,
    'list-header': ListHeader,
  },
  props: {
    tasksCompleted: {
      type: Object,
      required: true,
    }
  }
})
</script>

<style scoped>

</style>
