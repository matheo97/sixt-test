import styled, { css } from 'styled-components';
import { MOBILE, TABLET } from '../../../constants/breakpoints';

type Props = {
  appearance: 'title' | 'text';
};

const titleStyle = css`
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

const textStyle = css`
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

const Typography = styled.div<Props>`
  ${(props) => {
    switch (props.appearance) {
      case 'title':
        return titleStyle;
      case 'text':
        return textStyle;
    }
  }}
`;

export default Typography;
