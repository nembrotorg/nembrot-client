import angular from 'angular';
import Home from './home/home';
import Notes from './notes/notes';
import Note from './note/note';

let componentModule = angular.module('app.components', [
  Home.name,
  Notes.name,
  Note.name
]);

export default componentModule;
