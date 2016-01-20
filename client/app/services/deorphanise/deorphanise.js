// See https://github.com/rstacruz/unorphan
//  -- but that works on HTML as nodes, we need it to work on HTML as text

export default class Deorphanise {

    constructor() {
        "ngInject";
        this.NBSP = '\xA0';
    }

    text(string) {
      return string.replace(/\s+([^\s]*)\s*$/, this.NBSP + '$1');
    }

    html(string) {
      return string.replace(/\s+([^\s]*)\s*(\<\/)/g, this.NBSP + '$1$2');
    }

    paragraphs(string) {
      return string.replace(/\s+([^\s]*)\s*(\<\/)(p\>|li\>)/g, this.NBSP + '$1$2$3');
    }
}
