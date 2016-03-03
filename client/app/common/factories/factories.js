import books from './books/books';

let services = angular
  .module('app.services', [])
  .factory('books', books);

export default books;
