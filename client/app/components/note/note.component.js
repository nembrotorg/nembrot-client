import template from './note.html';
import controller from './note.controller';
import './note.styl';

let noteComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default noteComponent;
