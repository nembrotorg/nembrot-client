import angular from 'angular';
import Breadcrumbs from './breadcrumbs/breadcrumbs';
import Navbar from './navbar/navbar';
import Pagination from './pagination/pagination';
import Toolbar from './toolbar/toolbar';

let commonModule = angular.module('app.common', [
  Breadcrumbs.name,
  Navbar.name,
  Pagination.name,
  Toolbar.name
]);

export default commonModule;
