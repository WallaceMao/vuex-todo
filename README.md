# vuex-todo

> 基于vuex的todoMVC demo项目

## Run Project in DEV Mode

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Basic Structure

### Vuex结构
#### states
path: `src/store/states.js`
Vuex中的state，状态树的格式如下：
- todos: Array，用来存储todo列表
  - todo: Object，单个todo为一个，包含的字段包括：`id/title/completed`
    - id: Integer, todo的id，由后端生成，用来做todo的唯一标识，本demo中简单以时间戳作为id
    - title: String, todo的标题
    - completed: Boolean, todo完成与否，用来做标记
- visibility: Boolean，可选值为`all/active/completed`，用来做筛选

#### mutations
path: `src/store/mutations.js`
Vuex中的mutation，用来操作改变state

#### actions
path: `src/store/actions.js`
Vuex中的action，用来发送后台请求，并调用mutation做更新

#### getters
path: `src/store/getters.js`
Vuex中的getters，通用的获取state状态的方法

### Vue页面结构
#### App.vue
path: `src/App.vue`
入口页面，其中引入了TodoPanel组件

#### TodoPanel.vue
path: `src/components/TodoPanel.vue`
Todo面板，其中包含了todo列表，单个todo视图以TodoItem组件显示。其mounted hook方法中包含了请求todo列表的异步调用

#### TodoItem.vue
path: `src/components/TodoItem.vue`
单个todo的视图组件，封装了对todo的修改标题、删除、确认完成的操作

### CSS文件
为简单起见，在`src/main.js`入口处一次性引入项目所需要的所有css样式

## API Mock
为简单起见，模拟了系统所需要的后台接口。
说明如下：
- 基本的todo信息存储在localStorage中，浏览器需要支持localStorage
- API接口的调用统一使用window.restApi对象。
- 由于是在浏览器中模拟，因此调用过程**不会**在chrome开发者工具的network中显示
- 调用过程中需提供两个callback，分别用来做接口调用成功和失败的回调

### 获取todo列表
    window.restApi.get('/todos', res => {
      //TODO  获取成功
    }, err => {
      console.error('getTodos error: %o', err)
    })

### 新增todo
    window.restApi.post('/todo', {
      title: 'xxxx'
      completed: false
    }, res => {
      //TODO  新增成功
    }, err => {
      console.error('addTodo error: %o', err)
    })

需提供请求参数title和completed

### 删除todo
    window.restApi.delete('/todo/[id]', res => {
      //TODO  删除成功
    }, err => {
      console.error('removeTodo error: %o', err)
    })

需替换路径中的[id]为实际todo的id

### 更新todo
    window.restApi.put('/todo/[id]', {
      title: 'yyyy'
    }, res => {
      //TODO  更新成功
    }, err => {
      console.error('updateTodo error: %o', err)
    })

需替换路径中的[id]为实际todo的id，同时需要提供title请求参数

### 切换todo的完成状态
    window.restApi.put('/todo/[id]', {
      completed: true
    }, res => {
      //TODO 执行成功
    }, err => {
      console.error('toggleTodo error: %o', err)
    })

需替换路径中的[id]为实际todo的id，同时需要提供completed参数，表示需要切换到的状态

### 切换所有todo的完成状态
    window.restApi.put('/todos', {
      completed: true
    }, res => {
      //TODO  执行成功
    }, err => {
      console.error('checkAll error: %o', err)
    })

需要提供completed参数，表示需要切换到的状态

### 删除已完成的todo
    window.restApi.delete('/todo/completed', res => {
      //TODO  执行成功
    }, err => {
      console.error('toggleTodo error: %o', err)
    })

## 面试说明
项目效果[todoMVC for Vue](http://todomvc.com/examples/vue/)
参照[INTERVIEW.md](https://github.com/WallaceMao/vuex-todo/blob/master/INTERVIEW.md)

