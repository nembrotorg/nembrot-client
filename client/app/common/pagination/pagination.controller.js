class PaginationController {
  constructor($stateParams) {
    let vm = this;
    vm.name = 'pagination';

    let size = 10; // $settings.pageSize
    let count = vm.count;

    let last = Math.ceil(count / size);
    vm.page = $stateParams.p;
    vm.last = last;
    vm.pages = Array.from(new Array(last), (x, i) => i + 1);

    vm.previous = vm.page === 1 ? 1 : vm.page - 1;
    vm.next = vm.page === last ? last : vm.page + 1;

  }
}

export default PaginationController;
