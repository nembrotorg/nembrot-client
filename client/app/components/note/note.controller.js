class NoteController {
  constructor($http, $sce, $stateParams) {
  this.$http = $http;
  // this.$sce = $sce;
  this.$stateParams = $stateParams;

  this.name = 'note';
  this.id = this.$stateParams.id;

  this.$http.get(`http://joegatt.net/texts/${ this.id }.json?body=html&extended=true`)
    .then(response => this.note = sanitize(response.data));

  setTimeout(function(){ place_annotations_do(); }, 1000);

  function sanitize(note) {
    note.body = $sce.trustAsHtml(note.body);
    return note;
  }


  let $ = require('jquery'); // try using angular.element
  // let _ = require('underscore'); // use lodash
  // let $ = require('jquery/src/core');
  // require('jquery/src');
  // require('jquery/src/core/init');
  // require('jquery/src/manipulation');

  let _correct_annotations_from_bottom, place_annotations, place_annotations_do, place_annotations_undo;
  place_annotations = function () {
    if ($('html.wider-than-720px').length > 0) {
    return place_annotations_do();
    } else {
    return place_annotations_undo();
    }
  };
  place_annotations_do = function () {
    let annotations, corrected_top, minimum, new_top;
    if ($('#annotations').length > 0) {
      $('#annotations').addClass('side-annotations');
      annotations = $('li[id^=annotation-]');
      minimum = $('.body').offset().top;
      if ($('#single_map:visible').length > 0) {
        minimum += $('#single_map').outerHeight(true);
      }
      new_top = minimum;
      corrected_top = minimum;
      annotations.each(i => {
        new_top = $(`a[id=annotation-mark-${ i + 1 }]`).offset().top;
        corrected_top = new_top <= minimum ? minimum : new_top;
        minimum = corrected_top + $(this).outerHeight(true);
        return $(`li[id=annotation-${ i + 1 }]`).offset({ top: corrected_top });
      });
      return annotations;
      // return _correct_annotations_from_bottom(annotations);
    }
  };
  _correct_annotations_from_bottom = function (annotations) {
    let maximum, reversed_annotations, summed_heights;
    reversed_annotations = annotations.get().reverse();
    maximum = $('#text .body').offset().top + $('#text .body').outerHeight(false);
    summed_heights = _.reduce(reversed_annotations, (memo, num) => {
      return memo + $(num).outerHeight(true);
    }, 0);
    if ($('#text .body').outerHeight(false) > summed_heights) {
      return reversed_annotations.each(() => {
        let new_top, this_bottom, this_top;
        this_top = $(this).offset().top;
        this_bottom = $(this).offset().top + $(this).outerHeight(true);
        new_top = this_bottom > maximum ? maximum - $(this).outerHeight(true) : this_top;
        $(this).offset({ top: new_top });
        return maximum = new_top;
      });
    }
  };
  place_annotations_undo = function () {
    $('#annotations').removeClass('side-annotations');
    return $('li[id*=annotation-]').css('top', '0');
  };




















  }
}

export default NoteController;
