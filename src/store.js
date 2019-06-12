import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [],
  },
  mutations: {
    TODO_LIST_ADD_ITEM: function(state, response) {
      state.todoList.push(response)
    },
    TODO_LIST_REMOVE_ITEM: function(state, response) {
      state.todoList.splice(response, 1)
    },
    TODO_LIST_REMOVE_ALL: function(state, response) {
      state.todoList = response
    }
  },
  actions: {
  
  }
})
