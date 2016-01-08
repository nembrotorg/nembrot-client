import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiRouterTitle from 'angular-ui-router-title';
import breadcrumbsComponent from './breadcrumbs.component';

let breadcrumbsModule = angular.module('breadcrumbs', [
  uiRouter,
  'ui.router.title'
])

.component('breadcrumbs', breadcrumbsComponent);

export default breadcrumbsModule;
