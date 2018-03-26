import util from '@/utils/todoUtil'

export default {
  GET_TODOS (state, todos) {
    state.todos = todos
  },
  ADD_TODO (state, todo) {
    state.todos.push(todo)
  },
  REMOVE_TODO (state, id) {
    const todo = util.findById(state.todos, id)
    if (todo) {
      const index = state.todos.indexOf(todo)
      state.todos.splice(index, 1)
    }
  },
  UPDATE_TODO (state, { id, props }) {
    const todo = util.findById(state.todos, id)
    if (todo) {
      todo.title = props.title
    }
  },
  TOGGLE_TODO (state, { id, status }) {
    const todo = util.findById(state.todos, id)
    if (todo) {
      todo.completed = !!status
    }
  },
  TOGGLE_ALL_TODOS (state, status) {
    state.todos.forEach(function (todo) {
      todo.completed = status
    })
  },
  REMOVE_COMPLETED_TODOS (state) {
    state.todos = state.todos.filter(t => !t.completed)
  },
  FILTER_TODOS (state, type) {
    state.visibility = type
  }
}
