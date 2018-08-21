angular.module('todo-list').component('todoList', {
  bindings: {
    todos: '<'
  },
  template: `
        <div ng-repeat='todo in $ctrl.todos'>
            {{todo}}
        </div>
    `
});
