angular.module('todo-list').component('todoEntry', {
  bindings: {
    input: '=',
    submit: '<'
  },
  template: `
        <div>
          <form ng-submit="$ctrl.submit(e)">
          Add Todo: <input ng-model="$ctrl.input" />
          <button>Add</button>
          </form>
        </div>
      `
});
