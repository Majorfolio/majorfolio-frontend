import { styled } from 'styled-components';
import Button from '../../../components/common/Button';
import { StyledText } from '../../../components/common/Text/index.styles';
import theme from '../../../components/common/theme';

const StyledButton = styled(Button)`
  && ${StyledText} {
    color: ${({ disabled }) =>
      disabled ? theme.color['gray/gray400'] : theme.color['gray/white']};
  }
`;

export default StyledButton;
