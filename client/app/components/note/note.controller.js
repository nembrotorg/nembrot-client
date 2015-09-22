class NoteController {
  constructor($http, $sce, $stateParams) {
    this.$http = $http;
    // this.$sce = $sce;
    this.$stateParams = $stateParams;

    this.name = 'note';
    this.id = this.$stateParams.id;

    this.$http.get(`http://joegatt.net/texts/${ this.id }.json?body=html&extended=true`)
      .then(response => this.note = sanitize(response.data));

    function sanitize(note) {
      note.body = $sce.trustAsHtml(note.body);

      return note;
    }
  }
}

export default NoteController;
