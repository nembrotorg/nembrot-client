// import settings from './settings';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import Filters from './filters/filters';
import AppComponent from './app.component';
import uiRouterTitle from 'angular-ui-router-title';
// import 'normalize.css';

angular.module('app', [
  uiRouter,
  'ui.router.title',
  // 'jquery/src/core',
  // settings,
  Filters.name,
  Common.name,
  Components.name
])

.config(($locationProvider) => {
  $locationProvider.html5Mode(true);
})

.directive('app', AppComponent);
