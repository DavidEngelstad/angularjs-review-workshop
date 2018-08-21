angular.module('todo-list', []).component('app', {
  controller: function() {
    this.todo = '';
    this.todos = [];
    this.addTodo = e => {
      this.todos.push(this.todo);
    };
  },
  template: `
    Hello from Angular
    `
});
