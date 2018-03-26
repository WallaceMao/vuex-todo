export default {
  currentTodos (state) {
    switch (state.visibility) {
      case 'active':
        return state.todos.filter(todo => !todo.completed)
      case 'completed':
        return state.todos.filter(todo => todo.completed)
      default:
        return state.todos
    }
  },
  allTodos (state) {
    return state.todos
  },
  activeTodos (state) {
    return state.todos.filter(todo => !todo.completed)
  },
  completedTodos (state) {
    return state.todos.filter(todo => todo.completed)
  }
}
