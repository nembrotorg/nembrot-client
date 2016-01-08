import template from './breadcrumbs.html';
import controller from './breadcrumbs.controller';
import './breadcrumbs.styl';

let breadcrumbsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default breadcrumbsComponent;
