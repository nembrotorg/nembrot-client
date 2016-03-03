import angular from 'angular';
import Breadcrumbs from './breadcrumbs/breadcrumbs';
import Navbar from './navbar/navbar';
import Pagination from './pagination/pagination';
import Toolbar from './toolbar/toolbar';
import Filters from './filters/filters';
import Factories from './factories/factories';
import Services from './services/services';

let commonModule = angular.module('app.common', [
  Breadcrumbs.name,
  Navbar.name,
  Pagination.name,
  Toolbar.name,
  Filters.name,
  Factories.name,
  Services.name
]);

export default commonModule;
