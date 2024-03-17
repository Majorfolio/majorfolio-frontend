import React, { ReactNode, RefObject, forwardRef, useState } from 'react';
import Card from '../Card';
import Text from '../Text';
import { NotificationDefaultIcon } from '../../../assets/icons';
import Button from '../Button';
import {
  StyledBaseDialog,
  StyledBodyContianer,
  StyledButtonWrapper,
  StyledDialog,
  StyledModalContainer,
  StyledTitleRow,
} from './index.styles';
import { CloseActionsType } from '../../../hooks/common/useModal/index.types';
import Row from '../Row';

export type ModalCategoryType =
  | 'TO_BE_UPDATED'
  | 'DOWNLOAD_PAID_MATERIAL'
  | 'DOWNLOAD_PURCHASED_MATERIAL'
  | 'CANCEL_PURCHASE'
  | 'SWITCH_TO_PRIVATE'
  | 'INVALID_COUPON'
  | 'REPORT_MATERIAL'
  | 'REPORT_USER'
  | 'DELETE_DRAFT'
  | 'SAVE_DRAFT'
  | 'REQUIRE_PHONE_NUMBER'
  | 'CHANGE_NICKNAME'
  | 'SIGNOUT'
  | 'REQUIRE_SCHOOL_VERIFICATION'
  | 'REQUIRE_SIGNUP'
  | 'CANCEL_ON_UPLOAD'
  | 'REQUIRE_SIGNIN'
  | 'FEEDBACK_INVALID_FORMAT'
  | 'AVAILABLE_ON_MOBILE'
  | 'REGISTER_INCOMPLETE'
  | 'DELETE_ACCOUNT'
  | 'SALE_RESUME'
  | 'SALE_REVIEW'
  | 'SALE_PEND';

interface ModalPropsType {
  category: ModalCategoryType | null;
  modalRef: RefObject<HTMLDialogElement>;
  onPrimaryAction: () => void;
  onSecondaryAction?: () => void;
}

const HIGHLIGHTED_WORDS = [
  '다운로드',
  '결제 취소',
  '판매 중지',
  '쿠폰 코드',
  '자료',
  '사용자',
  '삭제',
  '임시저장',
  '전화번호',
  '변경',
  '로그아웃',
  '학교인증 후',
  '회원가입',
  '임시저장',
  '로그인',
  '판매 중지',
  '판매 검토 중',
  '판매 보류',
];

export const MODAL_TEXTS = {
  TO_BE_UPDATED: {
    TITLE: '아직 업데이트되지 않은 기능입니다.',
    BODY: '이 기능은 추후 업데이트될 예정입니다. 공지사항을 통해 업데이트 소식을 만나보세요.',
    FOOTER: ['취소하기', '재촉하기'],
  },
  DOWNLOAD_PAID_MATERIAL: {
    TITLE: '이 자료를 다운로드할 수 있습니다.',
    BODY: '결제가 완료된 자료이니,이 자료를 다운로드 받아 이용할 수 있습니다.',
    FOOTER: ['환불하기', '자료 다운로드'],
  },
  DOWNLOAD_PURCHASED_MATERIAL: {
    TITLE: '이 자료를 다운로드할 수 있습니다.',
    BODY: '구매가 완료된 자료이니,이 자료를 다운로드 받아 이용할 수 있습니다.',
    FOOTER: ['나중에', '자료 다운로드'],
  },
  CANCEL_PURCHASE: {
    TITLE: '이 자료를 결제 취소할 수 있습니다.',
    BODY: '결제 대기 중인 자료입니다. 이 자료를 결제 취소할 수 있습니다.',
    FOOTER: ['나중에', '결제 취소하기'],
  },
  SWITCH_TO_PRIVATE: {
    TITLE: '이 자료를 판매 중지하실 건가요?.',
    BODY: '자료함의 판매대기열에서 언제든지 다시 판매할 수 있습니다.',
    FOOTER: ['환불하기', '자료 다운로드'],
  },
  INVALID_COUPON: {
    TITLE: '적절하지 않은 쿠폰 코드입니다.',
    BODY: '적절하지 않은 쿠폰 코드이므로 재입력해주시기 바랍니다.',
    FOOTER: '재입력하기',
  },
  REPORT_MATERIAL: {
    TITLE: '해당 자료를 신고하실 건가요?',
    BODY: '사유: 특정 범주를 비하/옹호하는 표현이 포함됨 일시: 2024.01.20',
    FOOTER: ['취소하기', '신고하기'],
  },
  REPORT_USER: {
    TITLE: '해당 사용자를 신고하실 건가요?',
    BODY: '사유: 부적절한 언어 표현을 지속적으로 사용함 일시: 2024.01.20',
    FOOTER: ['취소하기', '신고하기'],
  },
  DELETE_DRAFT: {
    TITLE: '선택한 임시 저장글을 삭제할까요?',
    BODY: '임시 저장글을 삭제할 경우 복구가 불가능합니다.',
    FOOTER: ['취소하기', '삭제하기'],
  },
  SAVE_DRAFT: {
    TITLE: '작성한 게시글을 임시 저장할까요?',
    BODY: '임시 저장함에서 이 게시글을 다시 작성할 수 있습니다.',
    FOOTER: ['취소하기', '임시 저장하기'],
  },
  REQUIRE_PHONE_NUMBER: {
    TITLE: '전화번호를 입력해주세요.',
    BODY: '자료 업로드 전, 판매 보상 수령을 위해 전화번호를 입력해주세요.',
    FOOTER: ['취소하기', '전화번호 입력'],
  },
  CHANGE_NICKNAME: {
    TITLE: '닉네임을 정말 변경하실 건가요?',
    BODY: '닉네임 변경은 한 학기에 한 번만 가능합니다.',
    FOOTER: ['취소하기', '변경하기'],
  },
  SIGNOUT: {
    TITLE: '메이저폴리오를 로그아웃할까요?',
    BODY: '언제든지 다시 로그인하여 메이저폴리오를 사용할 수 있습니다.',
    FOOTER: ['취소하기', '로그아웃하기'],
  },
  REQUIRE_SCHOOL_VERIFICATION: {
    TITLE: '학교 인증이 필요한 기능입니다.',
    BODY: '믿을 수 있는 자료 공유의 첫걸음. 학교인증을 통해 다양한 기능을 만나보세요.',
    FOOTER: ['취소하기', '학교인증하기'],
  },
  REQUIRE_SIGNUP: {
    TITLE: '이 기능은 회원가입 후 사용가능합니다.',
    BODY: '해당 기능은 현재 회원가입이 되어있지 않아 사용할 수 없는 기능입니다.',
    FOOTER: ['취소하기', '회원가입하기'],
  },
  CANCEL_ON_UPLOAD: {
    TITLE: '임시저장하고 이어서 작성해보세요.',
    BODY: '업로드를 취소하시는 건가요? 임시 저장을 통해 이어서 작성할 수 있습니다.',
    FOOTER: ['업로드 취소', '임시저장'],
  },
  REQUIRE_SIGNIN: {
    TITLE: '로그인이 필요한 기능입니다.',
    BODY: '해당 기능은 로그인 및 가입을 진행한 후 이용할 수 있는 기능입니다.',
    FOOTER: ['나중에', '로그인하기'],
  },
  FEEDBACK_INVALID_FORMAT: {
    TITLE: '업로드가 불가능한 파일입니다.',
    BODY: 'PDF파일이 아닌 다른 양식의 파일 업로드는 추후 업데이트 때 사용할 수 있습니다.',
    FOOTER: '다시 업로드하기',
  },
  AVAILABLE_ON_MOBILE: {
    TITLE: '모바일로 접속해야 결제가 가능합니다.',
    BODY: 'PC에서는 결제할 수 없습니다. 모바일로 접속해주세요.',
    FOOTER: '홈으로 이동하기',
  },
  REGISTER_INCOMPLETE: {
    TITLE: '현재 사용할 수 없는 기능입니다.',
    BODY: '해당 기능은 상세정보 입력 및 약관동의가 완료된 후 사용할 수 있는 기능입니다. 이동할까요?',
    FOOTER: ['나중에', '이동하기'],
  },
  DELETE_ACCOUNT: {
    TITLE: '메이저폴리오를 탈퇴하시겠어요?',
    BODY: '메이저폴리오를 떠나시겠어요?',
    FOOTER: ['나중에', '탈퇴하기'],
  },
  SALE_RESUME: {
    TITLE: '이 자료는 판매 중지된 자료입니다.',
    BODY: '상세페이지 하단의 판매 재개 버튼을 통해 언제든지 다시 판매할 수 있습니다.',
    FOOTER: '확인하기',
  },
  SALE_REVIEW: {
    TITLE: '이 자료는 판매 검토중인 자료입니다.',
    BODY: '이 자료는 최근 업로드된 자료이며, 메이저폴리오 측에서 검토 중인 자료입니다.',
    FOOTER: '확인하기',
  },
  SALE_PEND: {
    TITLE: '이 자료는 판매 보류된 자료입니다.',
    BODY: '이 자료는 메이저폴리오에 의해 판매가 보류된 자료입니다. 고객센터를 통해 문의해주세요.',
    FOOTER: '확인하기',
  },
};

export function ModalCard({
  category,
  onPrimaryAction: onPrimaryClose,
  onSecondaryAction: onSecondaryClose = () => {},
}: Omit<ModalPropsType, 'modalRef'>) {
  // TODO Highlight the words with the primary color
  if (!category) {
    return <span />;
  }

  const title = (
    <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
      <StyledTitleRow>
        <NotificationDefaultIcon />
        {titleText}
      </StyledTitleRow>
    </Text>
  );

  const body = (
    <StyledBodyContianer>
      <Text color="gray/gray400" size={14} lineHeight="lg">
        {bodyText}
      </Text>
    </StyledBodyContianer>
  );

  const footer =
    typeof footerTexts === 'string' ? (
      <StyledButtonWrapper>
        <Button category="primary" onClick={onPrimaryClose}>
          <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
            {footerTexts}
          </Text>
        </Button>
      </StyledButtonWrapper>
    ) : (
      <StyledButtonWrapper>
        <Button category="secondary" onClick={onSecondaryClose}>
          <Text
            color="main_color/blue_p"
            size={16}
            weight="bold"
            lineHeight="sm"
          >
            {footerTexts[0]}
          </Text>
        </Button>
        <Button type="button" category="primary" onClick={onPrimaryClose}>
          <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
            {footerTexts[1]}
          </Text>
        </Button>
      </StyledButtonWrapper>
    );

  return (
    <StyledModalContainer>
      <Card title={title} body={body} footer={footer} />
    </StyledModalContainer>
  );
}

export default function Modal({ modalRef, ...props }: ModalPropsType) {
  return (
    <StyledDialog ref={modalRef}>
      <ModalCard {...props} />
    </StyledDialog>
  );
}

export function BaseModalCard({
  title,
  body,
  footer,
  modalRef,
}: {
  title?: ReactNode;
  body: ReactNode;
  footer: ReactNode;
  modalRef: RefObject<HTMLDialogElement>;
}) {
  return (
    <StyledBaseDialog ref={modalRef}>
      <StyledModalContainer>
        {title}
        {body}
        {footer}
      </StyledModalContainer>
    </StyledBaseDialog>
  );
}
