import template from './pagination.html';
import controller from './pagination.controller';
import './pagination.styl';

let paginationComponent = {
  restrict: 'E',
  bindings: {
    count: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default paginationComponent;
