class NotesController {
  constructor($http, $scope, $stateParams) {
    let vm = this;
    vm.name = 'notes';

    vm.p = $stateParams.p;

    $http.get(`http://joegatt.net/texts/p/${ vm.p }.json?blurb=true`)
      .then(response => {
        vm.data = response.data;
        $scope.pageNumber = response.data.count;
      });
  }
}

export default NotesController;
