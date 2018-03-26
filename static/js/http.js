(function(window){
  var STORATE_KEY = 'QWERTYUIOPASDFGH'

  function getArray () {
    var jsonString = localStorage.getItem(STORATE_KEY)
    return jsonString ? JSON.parse(jsonString) : []
  }
  function saveArray (json) {
    var str = JSON.stringify(json)
    localStorage.setItem(STORATE_KEY, str)
  }

  function getTodos () {
    return getArray()
  }
  function createTodo (props) {
    var arr = getArray()
    var dbObj = {
      id: new Date().getTime(),
      title: props.title,
      completed: props.completed
    }
    arr.push(dbObj)
    saveArray(arr)
    return dbObj
  }
  function deleteTodo (id) {
    var arr = getArray()
    var todo = arr.find(function(ele){
      return ele.id === parseInt(id)
    })
    if(!todo){
      return false
    }
    const index = arr.indexOf(todo)
    arr.splice(index, 1)
    saveArray(arr)
    return true
  }
  function updateTodo (props) {
    var arr = getArray()
    var todo = arr.find(function(ele){
      return ele.id === parseInt(props.id)
    })
    if(!todo){
      return null
    }

    if(typeof props.title === 'string'){
      todo.title = props.title
    }
    if(typeof props.completed === 'boolean'){
      todo.completed = props.completed
    }
    saveArray(arr)
    return todo
  }
  function updateAllTodo (props) {
    var arr = getArray()
    if(typeof props.completed === 'boolean'){
      arr.forEach(ele => {
        ele.completed = props.completed
      })
    }
    saveArray(arr)
    return true
  }
  function removeCompleted () {
    var arr = getArray()
    arr = arr.filter(t => !t.completed)
    saveArray(arr)
    return true
  }
  function checkCallback (cb, err) {
    if(!cb || !err){
      alert('请指定“正常返回”和“异常处理”的两个callback参数');
    }
  }

  /**
   * window.respAPI对象，用来模拟ajax请求
   * @type {{get: Window.restApi.get, post: Window.restApi.post, delete: Window.restApi.delete, put: Window.restApi.put}}
   */
  window.restApi = {
    get: function(path, callback, error){
      checkCallback(callback, error)
      if(path === '/todos'){
        callback.call(null, getTodos())
      }else{
        if(error)
          error.call(null, '404 Not Found')
      }
    },
    post: function(path, body, callback, error){
      checkCallback(callback, error)
      if(path === '/todo'){
        callback.call(null, createTodo(body))
      }else{
        if(error)
          error.call(null, '404 Not Found')
      }
    },
    'delete': function(path, callback, error){
      checkCallback(callback, error)
      const reg = /^\/todo\/(\w+)$/
      if(path === '/todo/completed'){
        callback.call(null, removeCompleted())
      }else if(reg.test(path)){
        var id = reg.exec(path)[1]
        var result = deleteTodo(id)
        if(result){
          callback.call(null, result)
        }else{
          if(error)
            error.call(null, '500 error')
        }
      }else{
        if(error)
          error.call(null, '404 Not Found')
      }
    },
    put: function(path, body, callback, error){
      checkCallback(callback, error)
      const reg = /^\/todo\/(\w+)$/
      if(path === '/todos'){
        var result = updateAllTodo(body)
        if(result){
          callback.call(null, result)
        }else{
          if(error)
            error.call(null, '500 error')
        }
      }else if(reg.test(path)){
        var id = reg.exec(path)[1]
        body.id = id
        var result = updateTodo(body)
        if(result){
          callback.call(null, result)
        }else{
          if(error)
            error.call(null, '500 error')
        }
      }else{
        if(error)
          error.call(null, '404 Not Found')
      }
    }
  }
})(window)
