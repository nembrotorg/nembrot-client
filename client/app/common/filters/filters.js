import hyphenate from './hyphenate/hyphenate.filter';
import trustAs from './trustAs/trustAs.filter';

let filters = angular
  .module('app.filters', [])
  .filter({hyphenate})
  .filter({trustAs});

export default filters;
