angular.module('todo-list', []).component('app', {
  controller: function() {
    this.todo = '';
    this.todos = [];
    this.addTodo = e => {
      this.todos.push(this.todo);
      this.todo = '';
    };
    this.deleteTodo = index => {
      this.todos.splice(index, 1);
    };
  },
  template: `
  <div>
    Hello from Angular
    <todo-entry input="$ctrl.todo" submit="$ctrl.addTodo"></todo-entry>
    <todo-list todos="$ctrl.todos" delete="$ctrl.deleteTodo"></todo-list>
  </div>
    `
});
