export default {
  getTodos ({ state, commit }) {
    window.restApi.get('/todos', res => {
      commit('GET_TODOS', res)
    }, err => {
      console.error('getTodos error: %o', err)
    })
  },
  addTodo ({ state, commit }, title) {
    const obj = {
      title: title,
      completed: false
    }
    window.restApi.post('/todo', obj, res => {
      commit('ADD_TODO', res)
    }, err => {
      console.error('addTodo error: %o', err)
    })
  },
  removeTodo ({ state, commit }, id) {
    window.restApi.delete('/todo/' + id, res => {
      commit('REMOVE_TODO', id)
    }, err => {
      console.error('removeTodo error: %o', err)
    })
  },
  updateTodo ({ state, commit }, { id, props }) {
    const obj = {
      id: id,
      title: props.title
    }
    window.restApi.put('/todo/' + id, obj, res => {
      commit('UPDATE_TODO', {id, props})
    }, err => {
      console.error('updateTodo error: %o', err)
    })
  },
  toggleTodo ({ state, commit }, { id, status }) {
    const obj = {
      completed: status
    }
    window.restApi.put('/todo/' + id, obj, res => {
      commit('TOGGLE_TODO', {id, status})
    }, err => {
      console.error('toggleTodo error: %o', err)
    })
  },
  toggleAll ({ state, commit }, status) {
    const obj = {
      completed: status
    }
    window.restApi.put('/todos', obj, res => {
      commit('TOGGLE_ALL_TODOS', status)
    }, err => {
      console.error('checkAll error: %o', err)
    })
  },
  removeCompletedTodos ({ state, commit }) {
    window.restApi.delete('/todo/completed', res => {
      commit('REMOVE_COMPLETED_TODOS')
    }, err => {
      console.error('toggleTodo error: %o', err)
    })
  },
  filterTodos ({ state, commit }, type) {
    commit('FILTER_TODOS', type)
  }
}
