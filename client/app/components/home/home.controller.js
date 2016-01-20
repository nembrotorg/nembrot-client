class HomeController {
  constructor($http) {
    this.name = 'home';

    $http.get('http://joegatt.net/texts/p/1.json?blurb=true')
      .then(response => {
        this.list = response.data.texts.slice(0, 6);
      });
  }
}

export default HomeController;
