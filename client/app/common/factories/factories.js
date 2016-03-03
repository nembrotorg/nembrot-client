import book from './book/book.factory';

let factories = angular
  .module('app.factories', [])
  .factory('book', book);

export default factories;
