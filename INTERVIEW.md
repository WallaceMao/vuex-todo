# 编码说明

## 一、新建git分支，名称以[面试者姓名全拼]-[面试当前的时间(yyyyMMddHH)]命名，并切换到新分支

## 二、查看[README.md](https://github.com/WallaceMao/vuex-todo/blob/master/README.md)文件，了解基本结构，然后编码答题

## 题目1

### 1.1 `src/App.vue`中有`input.new-todo`元素，请在该元素上绑定键盘的回车(Enter)键敲击事件到`addTodo`方法

### 1.2 实现`src/App.vue`中的`addTodo`方法，要求调用`actions`中的`addTodo`方法，实现新增todo的功能

## 题目2

### 2.1 利用Vuex的数据流转实现todo的删除功能要求：
- 点击`src/TodoItem.vue`中的`button.destroy`元素，删除该todo
- 自行实现action和mutation，后台接口可调用window.restApi.delete('/todo/[id]', callback, error)，可参考[README.md](https://github.com/WallaceMao/vuex-todo/blob/master/README.md)中的API接口文档

## 题目3
### 3.1 利用Vuex的数据流转实现todo的打勾完成和取消打勾完成功能，要求：
- 点击`src/TodoItem.vue`中的`input.toggle`元素，切换完成状态
- 自行实现action和mutation，后台接口可调用window.restApi.put('/todo/[id]', callback, error)，可参考[README.md](https://github.com/WallaceMao/vuex-todo/blob/master/README.md)中的API接口文档


## 题目4

### 4.1 利用Vuex的数据流转实现todo的编辑功能，要求：
- 双击`src/TodoItem.vue`中的`label`元素，进入编辑状态，显示`input.edit`元素。用户可以在这个input输入框中输入标题
- 在input元素上敲击回车(Enter)键，更新todo的标题
- 自行实现action和mutation，后台接口可调用window.restApi.put('/todo/[id]', callback, error)，可参考[README.md](https://github.com/WallaceMao/vuex-todo/blob/master/README.md)中的API接口文档

## 三、时间到后，提交代码到面试者新建的分支

## 四、说明
- 可自由上网查找Vue/Vuex等相关的资料
- 可参考本项目中的其他已有代码
