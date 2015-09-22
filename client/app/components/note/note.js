import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiRouterTitle from 'angular-ui-router-title';
import noteComponent from './note.component';

let noteModule = angular.module('note', [
  uiRouter,
  'ui.router.title'
])

.config(($stateProvider) => {
  $stateProvider
    .state('home.notes.note', {
      url: '/{id:int}',
      resolve: {
        $title: function($stateParams) { return 'Text ' + $stateParams.id; }
      },
      views: {
        '@' : {
          template: '<note></note>'
        }
      }
    });
})

.directive('note', noteComponent);

export default noteModule;
