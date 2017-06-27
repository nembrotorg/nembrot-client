import styled from 'styled-components';
import { CONTENT_COLUMNS_SPAN } from 'config.js';

const Content = styled.section`
  background-color: gray;
  grid-column-start: 3;
  grid-column-end: span ${CONTENT_COLUMNS_SPAN};
`;

export default Content;
