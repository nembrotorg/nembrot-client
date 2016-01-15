import template from './toolbar.html';
import controller from './toolbar.controller';
import './toolbar.styl';

let toolbarComponent = {
  restrict: 'E',
  bindings: {
    url: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default toolbarComponent;
