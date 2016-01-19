class NavbarController {
  constructor($http) {
    this.$http = $http;

    this.name = 'navbar';

    // Use the same request as in home page (caching)
    this.$http.get('http://joegatt.net/texts/p/1.json?blurb=true')
      .then(response => {
        this.list = response.data.texts.slice(0, 6);
      });
  }
}

export default NavbarController;
