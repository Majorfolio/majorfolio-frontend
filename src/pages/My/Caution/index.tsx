import React from 'react';
import { useNavigate } from 'react-router-dom';
import UploadCautionStep from '../../Upload/UploadCautionStep';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import { ArrowBackDefaultIcon } from '../../../assets/icons';
import Text from '../../../components/common/Text';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';

export default function Caution() {
  const navigate = useNavigate();
  return (
    <>
      <SecondaryTopbar
        transition={
          <button type="button" onClick={() => navigate(-1)} aria-label="prev">
            <ArrowBackDefaultIcon />
          </button>
        }
        title={
          <Text color="gray/gray900" size={18} weight="bold" lineHeight="sm">
            주의사항
          </Text>
        }
      />
      <StyledPageContainer>
        <UploadCautionStep />
      </StyledPageContainer>
    </>
  );
}
