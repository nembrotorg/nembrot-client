import angular from 'angular';
import uiRouter from 'angular-ui-router';
import paginationComponent from './pagination.component';

let paginationModule = angular.module('pagination', [
  uiRouter
])

.component('pagination', paginationComponent);

export default paginationModule;
