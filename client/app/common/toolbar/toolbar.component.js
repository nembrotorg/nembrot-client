import template from './toolbar.html';
import controller from './toolbar.controller';
import './toolbar.styl';

let toolbarComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  };
};

export default toolbarComponent;
