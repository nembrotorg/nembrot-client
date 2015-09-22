import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiRouterTitle from 'angular-ui-router-title';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter,
  'ui.router.title'
])

.config(($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '/',
      resolve: {
        $title: function() { return 'Home'; }
      },
      views: {
        '@' : {
          template: '<home></home>'
        }
      }
    });
})

.directive('home', homeComponent);

export default homeModule;
