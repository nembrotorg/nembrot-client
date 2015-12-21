class NotesController {
  constructor($http, $rootScope, $scope, $stateParams) {
    let vm = this;
    vm.name = 'notes';

    vm.pageNumber = $stateParams.p;

    $http.get(`http://joegatt.net/texts/p/${ vm.pageNumber }.json?blurb=true`)
      .then(response => {
        this.list = response.data.texts;
        vm.data = response.data;
        vm.count = response.data.count;
        vm.total_word_count = response.data.total_word_count;

        $rootScope.listCount = vm.count;
      });
  }
}

export default NotesController;
