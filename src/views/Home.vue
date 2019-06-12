<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <TodoInput></TodoInput> 
        </div>
        <div class="col-12 col-md-6">
          <TodoList></TodoList>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
export default {
  data () {
    return {

    }
  },
  components: {
    TodoInput, TodoList
  }
}
</script>
<style>

</style>