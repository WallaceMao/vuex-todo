export default {
  /**
   * 结合state的visibility字段，获取当前的todo列表
   * @param state
   * @returns {*}
   */
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
  /**
   * 获取所有的todo列表
   * @param state
   * @returns {Array|computed.todos|*}
   */
  allTodos (state) {
    return state.todos
  },
  /**
   * 获取completed标记为false的todo列表，即获取未完成的todo
   * @param state
   * @returns {T[]}
   */
  activeTodos (state) {
    return state.todos.filter(todo => !todo.completed)
  },
  /**
   * 获取completed标记为true的todo列表，即获取已完成的todo
   * @param state
   * @returns {T[]}
   */
  completedTodos (state) {
    return state.todos.filter(todo => todo.completed)
  }
}
