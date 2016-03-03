import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiRouterTitle from 'angular-ui-router-title';
import booksComponent from './books.component';

let booksModule = angular.module('books', [
  uiRouter,
  'ui.router.title'
])

// Get name of route from config (here 'bibliography' instead of 'books')
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('books', {
      parent: 'home',
      url: '^/bibliography?{p:int}',
      params: {
        p: {
          value: 1,
          squash: true
        }
      },
      resolve: {
        $title: function($stateParams) {
          return {
            title: 'Bibliography',
            url: 'http://localhost:4000/api/v4/books' + ($stateParams.p ? '?p=' + $stateParams.id : '')
          };
        }
      },
      views: {
        '@' : {
          template: '<books></books>'
        }
      }
    });
  })

.component('books', booksComponent);

export default booksModule;
