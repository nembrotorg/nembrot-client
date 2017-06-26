import { injectGlobal } from 'styled-components';
// import { fontFace } from 'polished';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100.1%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 28px;
  }

  body.openSansFontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  @font-face{
    font-family:XBitter;
    src:url(http://d2zyjwzv9avbqu.cloudfront.net/assets/Bitter/bold-a26b9ad50898e7e841853e8bb9bc3895.eot);
    src:url(http://d2zyjwzv9avbqu.cloudfront.net/assets/Bitter/bold-a26b9ad50898e7e841853e8bb9bc3895.eot?#iefix) format("embedded-opentype"),
        url(http://d2zyjwzv9avbqu.cloudfront.net/assets/Bitter/bold-caf162075c31af3bcb879c99d8245cdf.woff) format("woff"),
        url(http://d2zyjwzv9avbqu.cloudfront.net/assets/Bitter/bold-4d4bc77615fe25e27335fc0df34fe6e0.ttf) format("truetype");
        font-weight:bold;
        font-style:normal
  }

  @font-face{
    font-family: Bitter;
    src: url("fonts/Bitter/regular.svg") format("svg"),
        font-weight:bold;
        font-style:normal
    }

  body li {
    font-family: Georgia, serif;
  }

  body.bitterFontLoaded li {
    background-color: yellow;
    font-family: Bitter, Georgia, serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
  }
`;
