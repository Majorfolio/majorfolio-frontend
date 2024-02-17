import styled from 'styled-components';
import theme from '../../../components/common/theme';
import StyledButton from '../../Signup/SignupDetailsStep/index.styles';
import Button from '../../../components/common/Button';

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  background-color: ${theme.color['gray/grayBG']};
`;

export const StyledDraftSectionTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

export const StyledDraftEditButton = styled(Button)`
  justify-content: flex-end;
  padding: 0;
`;

export default StyledPageContainer;
