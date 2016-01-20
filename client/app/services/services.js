import deorphanise from './deorphanise/deorphanise';

let services = angular
  .module('app.services', [])
  .service('deorphanise', deorphanise);

export default services;
