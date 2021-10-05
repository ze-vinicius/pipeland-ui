import styled from 'styled-components/native';
import { typography, color, space, system } from 'styled-system';
import { TextStyleProps } from './text.props';

const Text = styled.Text<TextStyleProps>`
  ${system({
    textTransform: {
      property: 'textTransform',
      transform: (value) => `${value}`,
    },
  })}
  ${color};
  ${typography};
  ${space};
`;

export { Text };
