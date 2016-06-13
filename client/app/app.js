import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularComponent from 'angular-component';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import uiRouterTitle from 'angular-ui-router-title';
import restangular from '../../3rdparty/restangular';
// import 'normalize.css';

angular.module('app', [
  restangular,
  uiRouter,
  'ui.router.title',
  // 'jquery/src/core',
  Common.name,
  Components.name
])

.config(($locationProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('^/');
})

.component('app', AppComponent);
