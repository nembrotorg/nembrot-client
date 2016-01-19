class PaginationController {
  constructor($stateParams) {
    this.name = 'pagination';

    let size = 10; // $settings.pageSize
    let count = this.count || 1;

    let last = Math.ceil(count / size);
    this.page = $stateParams.p;
    this.last = last;
    this.pages = Array.from(new Array(last), (x, i) => i + 1);

    this.previous = this.page === 1 ? 1 : this.page - 1;
    this.next = this.page === last ? last : this.page + 1;

  }
}

export default PaginationController;
