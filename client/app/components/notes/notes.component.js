import template from './notes.html';
import controller from './notes.controller';
import './notes.styl';

let notesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default notesComponent;
