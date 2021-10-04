import styled from 'styled-components/native';
import { typography, color, space } from 'styled-system';
import { variants } from './text.variants';
const Text = styled.Text`
  ${({
  variant
}) => variants[variant || 'body1']};
  ${color};
  ${typography};
  ${space};
`;
export { Text };
//# sourceMappingURL=text.styles.js.map