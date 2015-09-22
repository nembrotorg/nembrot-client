class NotesController {
  constructor($http) {
    this.$http = $http;
    this.name = 'notes';
    
    this.$http.get('http://joegatt.net/texts/p/1.json?blurb=true')
      .then(response => {
        this.data = response.data
      });
  }
}

export default NotesController;
