import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularComponent from 'angular-component';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import uiRouterTitle from 'angular-ui-router-title';
// import Filters from './filters/unsafe/unsafe';
// import Filters from './filters/filters';
// import 'normalize.css';

angular.module('app', [
  uiRouter,
  'ui.router.title',
  // 'jquery/src/core',
  // Filters,
  Common.name,
  Components.name
])

.config(($locationProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('^/');
})

.component('app', AppComponent);
