<template>
  <div>
    <div class="container" style="border: 1px solid red;">
      <button class="btn btn-primary" @click="clearTheList()">Clear All List</button>
      <ul>
        <li v-for="(list, index) in todoList" :key="index" >
          {{list}}
          <span @click="removeItem(index)"><i class="fas fa-times"></i></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    todoList: function() {
      return this.$store.state.todoList
    }
  },
  methods: {
    removeItem: function (index) {
      this.$store.commit('TODO_LIST_REMOVE_ITEM', index)
    },
    clearTheList: function() {
      this.$store.commit('TODO_LIST_REMOVE_ALL', [])
    }
  }
}
</script>
<style>

</style>