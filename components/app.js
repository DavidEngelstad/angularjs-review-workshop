angular.module('todo-list', []).component('app', {
  controller: function() {
    this.todo = '';
    this.todos = [];
    this.addTodo = e => {
      this.todos.push(this.todo);
      this.todo = '';
      console.log(this.todos);
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
