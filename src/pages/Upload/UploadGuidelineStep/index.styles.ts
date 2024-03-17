import { styled } from 'styled-components';
import { StyledBodyContianer } from '../../../components/common/Modal/index.styles';
import Text from '../../../components/common/Text';
import theme from '../../../components/common/theme';

export const StyledContentSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 13px;
  box-sizing: border-box;
  background-color: ${theme.color['gray/gray50']};
  border-radius: 6px;
`;

export const StyledBodyContainer = styled.div`
  flex: 1;
`;

export const StyledIconTextRow = styled.li`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  column-gap: 4px;
`;

export const StyledUnderlinedText = styled(Text)`
  text-decoration-line: underline;
`;
