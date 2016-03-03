import deorphanise from './deorphanise/deorphanise.service';

let services = angular
  .module('app.services', [])
  .service('deorphanise', deorphanise);

export default services;
