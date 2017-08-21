import styled from 'styled-components';
import { CONTENT_COLUMNS_SPAN, CONTENT_COLUMNS_START } from 'config';

const Content = styled.section`
  grid-column-start: ${CONTENT_COLUMNS_START};
  grid-column-end: span ${CONTENT_COLUMNS_SPAN};
`;

export default Content;
