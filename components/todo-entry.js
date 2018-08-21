angular.module('todo-list').component('todoEntry', {
  bindings: {
    input: '=',
    submit: '<'
  },
  template: `
        <div>
            <form ng-submit='$ctrl.submit()'>
                Add todo: <input ng-model='$ctrl.input' />
                <button>Add</button>
            </form>
        </div>
    `
});
