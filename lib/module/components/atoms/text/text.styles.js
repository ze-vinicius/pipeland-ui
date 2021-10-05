import styled from 'styled-components/native';
import { typography, color, space, system } from 'styled-system';
const Text = styled.Text`
  ${system({
  textTransform: {
    property: 'text-transform',
    transform: value => `${value}`
  }
})}
  ${color};
  ${typography};
  ${space};
`;
export { Text };
//# sourceMappingURL=text.styles.js.map