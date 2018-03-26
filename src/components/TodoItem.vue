<template>
  <li class="todo">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed" @click="completeTodo">
      <label @dblclick="editTodo">{{todo.title}}</label>
      <button class="destroy" @click="removeTodo"></button>
    </div>
    <input ref="inputEdit" class="edit" type="text" v-model="todoTitle" @blur="doneEdit" @keyup.enter="blurEdit" @keyup.esc="cancelEdit">
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  data () {
    return {
      todoTitle: ''
    }
  },
  props: {
    todo: Object
  },
  methods: {
    editTodo () {
      this.todoTitle = this.todo.title
      this.$emit('todo-edit-set', this.todo)
      this.$nextTick(() => {
        this.$refs.inputEdit.focus()
      })
    },
    removeTodo () {
      this.$store.dispatch('removeTodo', this.todo.id)
    },
    completeTodo () {
      this.$store.dispatch('toggleTodo', {id: this.todo.id, status: !this.todo.completed})
    },
    blurEdit () {
      this.$refs.inputEdit.blur()
    },
    doneEdit () {
      this.$store.dispatch('updateTodo', {id: this.todo.id, props: {title: this.todoTitle}})
      this.todoTitle = ''
      this.$emit('todo-edit-reset')
    },
    cancelEdit () {
      this.$emit('todo-edit-reset')
    }
  }
}
</script>

<style scoped>

</style>
