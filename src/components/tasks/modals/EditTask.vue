<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
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
  name: "EditTask",
  components: {
    'modal-header': ModalHeader,
    'modal-task-name': ModalTaskName,
    'modal-due-date': ModalDueDate,
    'modal-due-time': ModalDueTime,
    'modal-buttons': ModalButtons
  },
  props: {
    task: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
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
    ...mapActions('tasks', ['updateTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.editTask()
        this.$emit("close")
      }
    },
    editTask() {
      this.updateTask({task: this.taskToSubmit, id: this.id})
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    }
  },
  mounted() {
    this.taskToSubmit = {...this.taskToSubmit, ...this.task}
  }
})
</script>

<style scoped>

</style>
