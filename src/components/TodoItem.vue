<template>
  <li class="todo">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed">
      <!--TODO  双击此元素，该todo进入编辑状态，显示下方的input.edit元素-->
      <label>{{todo.title}}</label>
      <!--TODO  点击此元素，删除该todo-->
      <button class="destroy"></button>
    </div>
    <input ref="inputEdit" class="edit" type="text" v-model="todoTitle">
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
  }
}
</script>

<style scoped>

</style>
