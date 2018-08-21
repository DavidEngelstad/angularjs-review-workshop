angular.module('todo-list').component('todoList', {
  bindings: {
    todos: '<',
    delete: '<'
  },
  template: `
        <div ng-repeat='todo in $ctrl.todos track by $index'>
            <button ng-click='$ctrl.delete($index)'>Complete</button>
            {{todo}}
        </div>
    `
});
