class HomeController {
  constructor($http) {
    this.$http = $http;
    this.name = 'home';

    // this.xxx = HOME_INDEX_LENGTH;

    this.$http.get('http://joegatt.net/texts/p/1.json?blurb=true')
      .then(response => {
        this.list = response.data.texts.slice(0, 6);
      });
  }
}

export default HomeController;
