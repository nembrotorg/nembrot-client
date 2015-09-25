import angular from 'angular';
import uiRouter from 'angular-ui-router';
import breadcrumbsComponent from './breadcrumbs.component';

let breadcrumbsModule = angular.module('breadcrumbs', [
  uiRouter,
  'ui.router.title'
])

.directive('breadcrumbs', breadcrumbsComponent);

export default breadcrumbsModule;
