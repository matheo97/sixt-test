import styled from "styled-components";
import { textStyle, titleStyle } from "./container.styles";

type Props = {
  appearance: 'title' | 'text';
};

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
