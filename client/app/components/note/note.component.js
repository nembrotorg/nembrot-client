import template from './note.html';
import controller from './note.controller';
import './note.styl';

let noteComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default noteComponent;
