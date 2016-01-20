import unorphan from './unorphan/unorphan';

let services = angular
  .module('app.services', [])
  .service('unorphan', unorphan);

export default services;
