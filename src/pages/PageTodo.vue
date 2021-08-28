<template>
  <q-page class="q-pa-md">

    <no-tasks v-if="!Object.keys(tasksTodo).length"
              @showAddTask="showAddTask = true"/>
    <tasks-todo :tasks-todo="tasksTodo"
                v-else/>

    <tasks-completed :tasks-completed="tasksCompleted"
                     v-if="Object.keys(tasksCompleted).length"/>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        @click="showAddTask = true"
        color="primary"
        size="24px"
        icon="add"/>
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @taskAdded="showAddTask = false"/>
    </q-dialog>

  </q-page>
</template>

<script>
import {defineComponent} from 'vue';
import {mapGetters} from 'vuex'
import Task from 'components/tasks/Task'
import TasksTodo from "components/tasks/TasksTodo";
import TasksCompleted from "components/tasks/TasksCompleted";
import AddTask from "components/tasks/modals/AddTask";
import NoTasks from "components/tasks/NoTasks";

export default defineComponent({
  data() {
    return {
      showAddTask: false,
    }
  },
  components: {
    'task': Task,
    'add-task': AddTask,
    'tasks-todo': TasksTodo,
    'tasks-completed': TasksCompleted,
    'no-tasks': NoTasks
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  }
})
</script>

<style scoped lang="scss">

.q-list {
  max-width: 350px;
}

</style>
