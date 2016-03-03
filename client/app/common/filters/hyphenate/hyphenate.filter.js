export default function ($sce, $log) {
  return function (input) {

    // REVIEW: When hyphenation is implemented in most browsers for any language
    //  (rather than just system language), this can be removed.
    //  http://caniuse.com/#feat=css-hyphens
    //  https://bugs.chromium.org/p/chromium/issues/detail?id=47083
    let Hypher = require('hypher'),
      english = require('hyphenation.en-gb'),
      x = {
        en: new Hypher(english)
      },
      hyphenatedOutput,
      cleanedHtmlTags;

      hyphenatedOutput = x.en.hyphenateText(input);
      cleanedHtmlTags = hyphenatedOutput.replace(/(\\u003c.*?)(\&shy\;)(.*?\\u003e)/gm, '$1$3')

      return $sce.trustAsHtml(cleanedHtmlTags);
    }
}
