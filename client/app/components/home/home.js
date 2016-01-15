import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiRouterTitle from 'angular-ui-router-title';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter,
  'ui.router.title'
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('home', {
      url: '^/',
      resolve: {
        $title: function($stateParams) { 
          return {
            title: 'Home',
            url: 'http://joegatt.net'
          };
        },
      },
      views: {
        '@' : {
          template: '<home></home>'
        }
      }
    });
})

.component('home', homeComponent);

export default homeModule;
