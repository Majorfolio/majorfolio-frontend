import React from 'react';
import { CheckboxDefaultIcon } from '../../../assets/icons';
import Text from '../../../components/common/Text';
import StyledAgreeAllRow, {
  StyledButtonContainer,
  StyledConditionRow,
  StyledConditionRow2,
} from './index.styles';
import Button from '../../../components/common/Button';

export default function SignupTermsAndConditionsStep() {
  return (
    <>
      <StyledAgreeAllRow>
        <CheckboxDefaultIcon />
        <Text size={14} color="gray/gray900" lineHeight="sm">
          전체 동의
        </Text>
      </StyledAgreeAllRow>
      <StyledConditionRow>
        <CheckboxDefaultIcon />
        <Text size={14} color="gray/gray900" lineHeight="sm">
          개인정보 수집 동의(필수)
        </Text>
      </StyledConditionRow>
      <StyledConditionRow2>
        <CheckboxDefaultIcon />
        <Text size={14} color="gray/gray900" lineHeight="sm">
          서비스 이용 약관 동의(필수)
        </Text>
      </StyledConditionRow2>
      <StyledButtonContainer>
        <Button backgroundColor="main_color/blue_p">
          <Text size={16} weight="bold" color="gray/white" lineHeight="sm">
            로그인
          </Text>
        </Button>
      </StyledButtonContainer>
    </>
  );
}
