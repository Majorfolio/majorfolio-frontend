import { styled } from 'styled-components';
import theme from '../../../components/common/theme';

const StyledRowContainer = styled.div``;

const StyledAgreeAllRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  border: 1px ${theme.color['gray/gray100']} solid;
  border-radius: 8px;
  height: 61px;
  padding: 0px 10px;
`;

export const StyledConditionRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  margin-top: 27px;
  padding-left: 26px;
`;

export const StyledConditionRow2 = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  margin-top: 34px;
  padding-left: 26px;
`;

export const StyledButtonContainer = styled.div`
  margin-top: 66px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export default StyledAgreeAllRow;
