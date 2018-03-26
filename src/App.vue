<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
      </header>
      <todo-panel />
      <footer class="footer" v-show="allTodo.length">
        <span class="todo-count">
          <strong v-text="remaining"></strong> {{pluralize('item', remaining)}} left
        </span>
        <ul class="filters">
          <li><a href="javascript: void(0);" :class="{selected: visibility === 'all'}"
                 @click="filterTodos('all')">All</a></li>
          <li><a href="javascript: void(0);" :class="{selected: visibility === 'active'}"
                 @click="filterTodos('active')">Active</a></li>
          <li><a href="javascript: void(0);" :class="{selected: visibility === 'completed'}"
                 @click="filterTodos('completed')">Completed</a></li>
        </ul>
        <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import TodoPanel from './components/TodoPanel'

export default {
  name: 'App',
  data () {
    return {
      newTodo: ''
    }
  },
  computed: {
    todos () {
      return this.$store.getters.currentTodos
    },
    allTodo () {
      return this.$store.getters.allTodos
    },
    remaining () {
      return this.$store.getters.activeTodos.length
    },
    visibility () {
      return this.$store.state.visibility
    }
  },
  components: {
    TodoPanel,
    'todo-panel': TodoPanel
  },
  methods: {
    addTodo () {
      const value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.$store.dispatch('addTodo', value)
      this.newTodo = ''
    },
    removeCompleted () {
      this.$store.dispatch('removeCompletedTodos')
    },
    filterTodos (type) {
      this.$store.dispatch('filterTodos', type)
    },
    pluralize (word, count) {
      return word + (count === 1 ? '' : 's')
    }
  },
  mounted () {
    this.$store.dispatch('getTodos')
  }
}
</script>

<style>

</style>
