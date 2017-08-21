import styled from 'styled-components';

import {
  ANNOTATIONS_FONT_SIZE,
  ANNOTATIONS_LINE_HEIGHT,
  FONT_SIZE,
  RED,
  TAB
} from 'config';

const Text = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: ${TAB};

  #body {
    position: relative;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  p {
    display: block;
    font-size: ${FONT_SIZE};
    hyphens: auto;
    margin: 0;
    overflow: hidden;
    ${'' /* position: relative; */}
    text-align: justify;
    text-indent: ${TAB};
    &:first-of-type {
      text-indent: 0;
    }
    a[id*=annotation-mark] {
      font-size: 11px;
      line-height: 0;
      vertical-align: super;
    }
  }
  #annotations {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    position: relative;
    ol {
      background-color: purple;
      padding: 0;
    }
    li {
      color: ${RED};
      line-height: ${ANNOTATIONS_LINE_HEIGHT};
      list-style-type: none;
      margin: 0;
      padding: 0;
      position: absolute;
      text-align: left;
      font-size: ${ANNOTATIONS_FONT_SIZE};
      a:first-of-type {
        display: inline-block;
        width: ${TAB};
        &:after {
          content: '.';
        }
      }
    }
  }
`;

export default Text;
