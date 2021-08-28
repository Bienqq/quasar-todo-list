<template>
  <q-item
    v-ripple
    clickable
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'">
    <q-item-section side top>
      <q-checkbox :model-value="task.completed"
                  @click="completeTask"/>
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{'text-strike' : task.completed}">
        {{ task.name }}
      </q-item-label>
    </q-item-section>


    <q-item-section side
                    v-if="task.dueDate">
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event"
                  size="18px"
                  class="q-mr-xs"/>
        </div>
        <div class="column">
          <q-item-label
            class="row justify-end"
            caption>
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label
            class="row justify-end"
            caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn @click.stop="showEditTask = true"
               flat
               round
               dense
               color="primary"
               icon="edit"/>
        <q-btn @click.stop="promptToDelete(id)"
               flat
               round
               dense
               color="red"
               icon="delete"/>
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task :task=task
                 :id="id"
                 @close="showEditTask = false"/>
    </q-dialog>

  </q-item>
</template>

<script>
import {defineComponent} from 'vue'
import {mapActions} from 'vuex'
import EditTask from "components/tasks/modals/EditTask";

export default defineComponent({
  name: "Task",
  components: {
    'edit-task': EditTask
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
      showEditTask: false
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Do you really want to delete this task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log("deleted")
        this.deleteTask(id)
      })
    },
    completeTask() {
      this.updateTask({
        id: this.id,
        task: {
          ...this.task,
          completed: !this.task.completed,
        }
      })
    }
  }
})
</script>

<style scoped>

</style>
