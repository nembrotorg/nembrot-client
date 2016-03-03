import angular from 'angular';
import Home from './home/home';
import Books from './books/books';
import Notes from './notes/notes';
import Note from './note/note';

let componentModule = angular.module('app.components', [
  Home.name,
  Books.name,
  Notes.name,
  Note.name
]);

export default componentModule;
