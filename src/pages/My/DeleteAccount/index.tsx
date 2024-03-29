import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Description from '../../../components/common/Description';
import BottomButtonBar from '../../../components/common/BottomButtonBar';
import useAuthStore from '../../../store/useAuthStore';
import { deleteAccount } from '../../../apis/member';
import { PageContainer } from '../../Home/index.styles';
import { StyledBodyContainer } from '../../Upload/UploadGuidelineStep/index.styles';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import { CloseDefaultIcon } from '../../../assets/icons';
import Text from '../../../components/common/Text';
import useRefreshPayload from '../../../hooks/common/useRefreshPayload';
import { StyledBodyContianer } from '../../../components/common/Modal/index.styles';
import StyledBottomButtonBar from '../../../components/common/BottomButtonBar/index.styles';
import StyledButtonBarContainer from './index.styles';
import { SomeContainer } from '../../Upload/UploadInProgressStep/index.styles';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';

export default function DeleteAccount() {
  const navigate = useNavigate();

  const accessToken = useAuthStore((state) => state.accessToken);
  const signoutLocally = useAuthStore((state) => state.signout);

  if (!accessToken) {
    return <span />;
  }

  const refreshPayload = useRefreshPayload();
  const secondaryTransition = {
    text: '탈퇴하기',
    onAction: async () => {
      await deleteAccount(accessToken, refreshPayload);
      signoutLocally();
      navigate('/signin');
    },
  };

  const primaryTransition = {
    text: '더 써볼래요',
    onAction: () => navigate('/'),
  };

  return (
    <>
      <SecondaryTopbar
        transition={
          <button type="button" onClick={() => navigate('../')}>
            <CloseDefaultIcon />{' '}
          </button>
        }
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            회원 탈퇴
          </Text>
        }
      />
      <StyledPageContainer>
        <SomeContainer>
          <Description
            normalText="메이저폴리오의"
            boldText="탈퇴 사유를 선택해주세요"
          />
        </SomeContainer>
        <BottomButtonBar
          transitions={[secondaryTransition, primaryTransition]}
        />
      </StyledPageContainer>
    </>
  );
}
