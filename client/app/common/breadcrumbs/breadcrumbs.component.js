import template from './breadcrumbs.html';
import controller from './breadcrumbs.controller';
import './breadcrumbs.styl';

let breadcrumbsComponent = function () {
  return {
    restrict: 'E',
    scope: true,
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  };
};

export default breadcrumbsComponent;
