import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import {
  CloseDefaultIcon,
  ContactUsBlueCharacter,
  ContactUsYellowCharacter,
} from '../../../assets/icons';
import Text from '../../../components/common/Text';
import { CenteredRow } from '../../../components/common/Row';
import { KakaoButton } from '../../../components/common/Button';
import StyledRow from './index.styles';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';
import RowButton from '../../../components/common/RowButton';
import useModal from '../../../hooks/common/useModal';
import Modal from '../../../components/common/Modal';

const KAKAOTALK_CHANNEL_URL = 'http://pf.kakao.com/_NexmfG/chat';

// TODO find out vulnerable securities caused by _blank
// reference: https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export default function ContactUs() {
  const navigate = useNavigate();
  const { activateModal, closePrimarily, closeSecondarily, ...modalProps } =
    useModal();

  return (
    <>
      <SecondaryTopbar
        transition={
          <button type="button" onClick={() => navigate(-1)} aria-label="prev">
            <CloseDefaultIcon />
          </button>
        }
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            고객센터
          </Text>
        }
      />
      <StyledPageContainer>
        <StyledRow>
          <ContactUsYellowCharacter />
          <ContactUsBlueCharacter />
        </StyledRow>
        <StyledRow>
          <KakaoButton
            onClick={() => openInNewTab('https://pf.kakao.com/_NexmfG/chat')}
          >
            카카오톡 채널 상담
          </KakaoButton>
        </StyledRow>
        <StyledRow>
          <RowButton
            text="FAQ"
            onClick={() => {
              activateModal('TO_BE_UPDATED', {
                primaryAction: () => {},
              });
              // navigate('../FAQ');
            }}
          />
        </StyledRow>
        <Modal
          {...modalProps}
          onPrimaryAction={closePrimarily}
          onSecondaryAction={closeSecondarily}
        />
      </StyledPageContainer>
    </>
  );
}
