import styled from 'styled-components';
import theme from '../../../components/common/theme';
import StyledButton from '../../Signup/SignupDetailsStep/index.styles';
import Button from '../../../components/common/Button';
import StyledText from '../../../components/common/Text/index.styles';

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  background-color: ${theme.color['gray/grayBG']};
  min-height: 100vh;
`;

export const StyledDraftText = styled(StyledText)`
  white-space: nowrap;
`;

export const StyledDraftSectionTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;

  && ${StyledText} {
    white-space: nowrap;
  }
`;

export const StyledDraftEditButton = styled.button`
  display: flex;
  border-width: 0;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  justify-content: flex-end;
  padding: 0;
  background-color: transparent;
`;

export default StyledPageContainer;
