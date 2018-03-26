import util from '@/utils/todoUtil'

/**
 * mutations，统一使用大写字母，以下划线分割
 */
export default {
  /**
   * 保存TODO信息
   * @param state
   * @param todos
   * @constructor
   */
  GET_TODOS (state, todos) {
    state.todos = todos
  },
  /**
   * 新增TODO
   * @param state
   * @param todo
   * @constructor
   */
  ADD_TODO (state, todo) {
    state.todos.push(todo)
  },
  /**
   * 移除todo
   * @param state
   * @param id
   * @constructor
   */
  REMOVE_TODO (state, id) {
    const todo = util.findById(state.todos, id)
    if (todo) {
      const index = state.todos.indexOf(todo)
      state.todos.splice(index, 1)
    }
  },
  /**
   * 更新todo，目前只更新title字段
   * @param state
   * @param id
   * @param props
   * @constructor
   */
  UPDATE_TODO (state, { id, props }) {
    const todo = util.findById(state.todos, id)
    if (todo) {
      todo.title = props.title
    }
  },
  /**
   * 切换todo的completed值
   * @param state
   * @param id
   * @param status
   * @constructor
   */
  TOGGLE_TODO (state, { id, status }) {
    const todo = util.findById(state.todos, id)
    if (todo) {
      todo.completed = !!status
    }
  },
  /**
   * 切换所有todo的complete值
   * @param state
   * @param status
   * @constructor
   */
  TOGGLE_ALL_TODOS (state, status) {
    state.todos.forEach(function (todo) {
      todo.completed = status
    })
  },
  /**
   * 移除completed标记为true的todo
   * @param state
   * @constructor
   */
  REMOVE_COMPLETED_TODOS (state) {
    state.todos = state.todos.filter(t => !t.completed)
  },
  /**
   * 设置visibility
   * @param state
   * @param type
   * @constructor
   */
  SET_VISIBILITY (state, type) {
    state.visibility = type
  }
}
