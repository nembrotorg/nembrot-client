import styled from 'styled-components';
import { CONTENT_COLUMNS_START, CONTENT_COLUMNS_SPAN } from 'config.js';

export default styled.nav`
  background-color: red;
  grid-column-start: ${CONTENT_COLUMNS_START};
  grid-column-end: span ${CONTENT_COLUMNS_SPAN};
`;
