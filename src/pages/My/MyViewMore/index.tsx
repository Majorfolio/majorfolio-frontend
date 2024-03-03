import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import { CloseDefaultIcon } from '../../../assets/icons';
import Text from '../../../components/common/Text';
import Column from '../../../components/common/Column';
import RowButton from '../../../components/common/RowButton';
import Modal from '../../../components/common/Modal';
import useModal from '../../../hooks/common/useModal';
import BottomBar from '../../../components/common/BottomBar';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';

export default function MyViewMore() {
  const navigate = useNavigate();
  const topbar = (
    <SecondaryTopbar
      transition={
        <button type="button" onClick={() => navigate(-1)}>
          <CloseDefaultIcon />
        </button>
      }
      title={
        <Text color="gray/gray900" size={18} weight="bold" lineHeight="sm">
          더보기
        </Text>
      }
    />
  );

  const rowTexts = [
    '내 정보 관리',
    '알림',
    '공지사항',
    '이벤트',
    '업로드 가이드라인',
    '고객센터',
    '로그아웃',
    '회원탈퇴',
  ];

  const { activateModal, closePrimarily, closeSecondarily, ...modalProps } =
    useModal();

  // TODO add each feature
  const rowActions = [
    () =>
      activateModal('TO_BE_UPDATED', {
        primaryAction: () => {},
        secondaryAction: () => {},
      }),
    () =>
      activateModal('TO_BE_UPDATED', {
        primaryAction: () => {},
        secondaryAction: () => {},
      }),
    () =>
      activateModal('TO_BE_UPDATED', {
        primaryAction: () => {},
        secondaryAction: () => {},
      }),
    () =>
      activateModal('TO_BE_UPDATED', {
        primaryAction: () => {},
        secondaryAction: () => {},
      }),
    () =>
      activateModal('TO_BE_UPDATED', {
        primaryAction: () => {},
        secondaryAction: () => {},
      }),
    () =>
      activateModal('TO_BE_UPDATED', {
        primaryAction: () => {},
        secondaryAction: () => {},
      }),
    () =>
      activateModal('TO_BE_UPDATED', {
        primaryAction: () => {},
        secondaryAction: () => {},
      }),
    () =>
      activateModal('TO_BE_UPDATED', {
        primaryAction: () => {},
        secondaryAction: () => {},
      }),
  ];

  const rowButtons = rowTexts.map((rowText, index) => (
    <RowButton onClick={rowActions[index]} text={rowText} />
  ));

  return (
    <>
      {topbar}
      <StyledPageContainer>
        <Column>{rowButtons}</Column>
        <Modal
          onPrimaryAction={closePrimarily}
          onSecondaryAction={closeSecondarily}
          {...modalProps}
        />
      </StyledPageContainer>
    </>
  );
}
