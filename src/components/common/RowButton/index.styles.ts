import { styled } from 'styled-components';
import { ArrowRightDefaultIcon } from '../../../assets/icons';
import Text from '../Text';

const StyledRowButton = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 9px 0px;
`;

export const StyledNextIcon = styled(ArrowRightDefaultIcon)`
  box-sizing: content-box;
  padding: 10px;
`;

export const StyledAlignedText = styled(Text)`
  text-align: start;
`;

export default StyledRowButton;
