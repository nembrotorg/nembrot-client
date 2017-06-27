import styled from 'styled-components';
import { COLUMN_WIDTH, LINE_HEIGHT, PAGE_COLUMNS_SPAN } from 'config.js';

const lineHeight = '28px';

const Page = styled.div`
  background-color: yellow;
  display: grid;
  grid-column-gap: ${LINE_HEIGHT};
  grid-template-columns: repeat(${PAGE_COLUMNS_SPAN}, 1fr);
  min-height: 100.1%;
`;

export default Page;
