<template>
  <div>
    <div class="container" style="border: 1px solid red;">
      <div class="form-group">
        <label>Enter an item</label>
        <input type="text" v-model="addItem" class="form-control"/>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click="addItemToTodo()">Add Item</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      addItem: null,
    }
  },
  methods: {
    addItemToTodo: function () {
      console.log(this.addItem)

      this.$store.commit('TODO_LIST_ADD_ITEM', this.addItem)

      this.addItem = null
    }
  }
}
</script>
<style>

</style>