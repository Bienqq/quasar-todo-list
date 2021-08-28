import {uid} from 'quasar'

const initialState = {
  tasks: {
    [uid()]: {
      name: "Go to shop",
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:30',
    },
    [uid()]: {
      name: "Get bananas",
      completed: false,
      dueDate: '2019/05/13',
      dueTime: '14:00',
    },
    [uid()]: {
      name: "Get apples",
      completed: false,
      dueDate: '2019/05/14',
      dueTime: '16:00',
    }
  }
}

const mutations = {
  updateTask: (state, payload) => {
    const taskId = payload.id
    state.tasks[taskId] = payload.task
  },
  deleteTask: (state, id) => {
    delete state.tasks[id]
  },
  addTask: (state, payload) => {
    state.tasks[uid()] = payload
  }
}

const actions = {
  updateTask: ({commit}, payload) => {
    commit('updateTask', payload)
  },
  deleteTask: ({commit}, id) => {
    commit('deleteTask', id)
  },
  addTask: ({commit}, payload) => {
    commit('addTask', payload)
  }

}

const getters = {
  tasksTodo: state => {
    const entries =  Object.entries(state.tasks).filter(([id, task]) => !task.completed)
    return Object.fromEntries(entries)
  },
  tasksCompleted: state => {
    const entries =  Object.entries(state.tasks).filter(([id, task]) => task.completed)
    return Object.fromEntries(entries)
  }


}


export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters
}
