import template from './notes.html';
import controller from './notes.controller';
import './notes.styl';

let notesComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default notesComponent;
