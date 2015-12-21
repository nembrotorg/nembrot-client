import template from './pagination.html';
import controller from './pagination.controller';
import './pagination.styl';

let paginationComponent = function () {
  return {
    restrict: 'E',
    scope: {
      count: '='
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  };
};

export default paginationComponent;