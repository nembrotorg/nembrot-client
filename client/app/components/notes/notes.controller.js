class NotesController {
  constructor($http, $rootScope, $scope, $stateParams) {
    this.name = 'notes';
    this.pageNumber = $stateParams.p;

    $http.get(`http://joegatt.net/texts/p/${ this.pageNumber }.json?blurb=true`)
      .then(response => {
        this.list = response.data.texts;
        this.data = response.data;
        this.count = response.data.count;
        this.total_word_count = response.data.total_word_count;
      });
  }
}

export default NotesController;
