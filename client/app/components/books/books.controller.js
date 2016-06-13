class BooksController {
  constructor(Restangular) {
    let vm = this;
    vm.name = 'books';

    Restangular.setBaseUrl('http://localhost:3000/api/v4/');

    // https://gist.github.com/pywebdesign/a81755c46f041bed6cf1
    Restangular.addResponseInterceptor((data, operation, what, url, response, deferred) => {
      let extractedData = data.data;
      extractedData.meta = data.meta;
      extractedData.included = data.included;

      let _apply = function (elem, fct){
        if(elem !== undefined){
          if(elem.type !== undefined){
            fct(elem);
          } else {
            _.forEach(elem, (el) => {
              _apply(el, fct);
            });
          }
        }
      }

      _apply(data.data, (elem) => {
        _apply(elem.relationships, (rel) => {
          rel.getIncluded = function(){
            return _.find(extractedData.included, (included) => {
              a = included.type == rel.type;
              b = included.id == rel.id;
              return a && b;
            });
          };
        });
      });
      return extractedData;
    });

    vm.list = Restangular.all('books').getList();
  }
}

export default BooksController;
