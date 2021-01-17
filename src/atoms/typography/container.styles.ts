import { css } from 'styled-components';
import { MOBILE, TABLET } from '../../constants/breakpoints';

export const titleStyle = css`
  font-weight: 500;
  font-size: 2rem;
  @media (max-width: ${TABLET}) {
    font-size: 1.8rem;
  }
  @media (max-width: ${MOBILE}) {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

export const textStyle = css`
  font-weight: 400;
  font-size: 1.2rem;
  @media (max-width: ${TABLET}) {
    font-size: 1.1rem;
  }
  @media (max-width: ${MOBILE}) {
    font-weight: 300;
    font-size: 1rem;
  }
`;
