import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    todos: [],
    userId: 0,
    userName: '',
  },
  mutations: {
    changeUsers: (state, payload) => {
      state.users.push(payload)
    },
    changeTodos: (state, payload) => {
      state.todos.push(payload)
    },
    changeId: (state, payload) => {
      state.userId = payload;
    },
    changeUserName: (state, payload) => {
      state.userName = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
