import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiRouterTitle from 'angular-ui-router-title';
import notesComponent from './notes.component';

let notesModule = angular.module('notes', [
  uiRouter,
  'ui.router.title'
])

// Get name of route from config (here 'texts' instead of 'notes')

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home.notes', {
      url: 'notes/p/{p:int}',
      resolve: {
        $title: function() { return 'Texts'; }
      },
      views: {
        '@' : {
          template: '<notes></notes>'
        }
      }
    });
  $urlRouterProvider
    .when('notes', 'notes/p/1');
})

.directive('notes', notesComponent);

export default notesModule;
