import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  max-width: 320px;
  margin: 0 auto;
  color: ${black};
  ${elevation[4]};
  ${transition({
    property: 'box-shadow',
  })};
  // selects parent element
  &:hover {
    ${elevation[5]};
  }
`;
