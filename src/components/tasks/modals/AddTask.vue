<template>
  <q-card>
    <modal-header>Add Task</modal-header>
    <form @submit.prevent="submitForm">
      <q-card-section>

        <modal-task-name v-model:name="taskToSubmit.name"
                         ref="modalTaskName"/>

        <modal-due-date v-model:dueDate="taskToSubmit.dueDate"
                        @clear="clearDueDate"/>

        <modal-due-time v-if="taskToSubmit.dueDate"
                        v-model:dueTime="taskToSubmit.dueTime"/>

      </q-card-section>

      <modal-buttons/>

    </form>

  </q-card>
</template>

<script>
import {defineComponent} from 'vue'
import {mapActions} from 'vuex'
import ModalHeader from "components/tasks/modals/shared/ModalHeader";
import ModalTaskName from "components/tasks/modals/shared/ModalTaskName";
import ModalDueDate from "components/tasks/modals/shared/ModalDueDate";
import ModalDueTime from "components/tasks/modals/shared/ModalDueTime";
import ModalButtons from "components/tasks/modals/shared/ModalButtons";

export default defineComponent({
  name: "AddTask",
  components: {
    'modal-header': ModalHeader,
    'modal-task-name': ModalTaskName,
    'modal-due-date': ModalDueDate,
    'modal-due-time': ModalDueTime,
    'modal-buttons': ModalButtons
  },
  data() {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
        this.$emit("close")
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit)
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    }
  }
})
</script>

<style scoped>

</style>
