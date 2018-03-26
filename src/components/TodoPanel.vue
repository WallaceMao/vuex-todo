<template>
  <section class="main" v-show="todos.length">
    <input class="toggle-all" type="checkbox" v-model="allDone">
    <ul class="todo-list">
      <todo-item class="todo"
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          :class="{completed: todo.completed, editing: todo === editedTodo}"
          @todo-edit-set="setEditedTodo"
          @todo-edit-reset="resetEditedTodo">
      </todo-item>
    </ul>
  </section>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'todo-panel',
  data () {
    return {
      editedTodo: null
    }
  },
  computed: {
    todos () {
      return this.$store.getters.currentTodos
    },
    remaining () {
      return this.$store.getters.activeTodos
    },
    allDone: {
      get: function () {
        return this.remaining.length === 0
      },
      set: function (value) {
        this.$store.dispatch('toggleAll', value)
      }
    }
  },
  components: {
    'todo-item': TodoItem
  },
  methods: {
    setEditedTodo (todo) {
      this.editedTodo = todo
    },
    resetEditedTodo () {
      this.editedTodo = null
    }
  }
}
</script>

<style scoped>

</style>
