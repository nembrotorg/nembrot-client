import angular from 'angular';
import uiRouter from 'angular-ui-router';
import paginationComponent from './pagination.component';

let paginationModule = angular.module('pagination', [
  uiRouter
])

.directive('pagination', paginationComponent);

export default paginationModule;
