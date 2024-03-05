import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { HelperInfoIcon } from '../../assets/icons';
import {
  AdviceContainer,
  CodeAdviceContainer,
  CodeContainer,
  HelperTextWrapper,
  MarginBottom16,
  MarginBottom4,
  RemittanceContainer,
  StickyBottom,
  ButtonWrapper,
  CopyButton,
} from './index.styles';

import AllDivider from '../../components/common/AllDivider';
import Text from '../../components/common/Text';
import BottomPaymentAmount from '../../components/home/BottomPaymentAmount';
import Button from '../../components/common/Button';
import useAuthStore from '../../store/useAuthStore';
import { cancelPayment, getBuyInfo } from '../../apis/payments';
import { OrderInfo } from '../../components/home/Payment/index.types';
import useModal from '../../hooks/common/useModal';
import Modal from '../../components/common/Modal';
import useRefreshPayload from '../../hooks/common/useRefreshPayload';

const RemittanceAdvice = () => {
  const location = useLocation();
  const materialInfo = location.state;
  const { buyInfoId } = useParams();
  const authStore = useAuthStore((state) => state.accessToken)!;
  const [buyInfo, setBuyInfo] = useState<OrderInfo>();
  const { activateModal, closePrimarily, closeSecondarily, ...modalProps } =
    useModal();
  const navigate = useNavigate();

  const hanelCopyClick = (code: string | undefined) => {
    try {
      if (code) {
        navigator.clipboard.writeText(code);
      }
    } catch (error) {
      alert('클립보드 복사에 실패하였습니다.');
    }
  };

  const refreshPayload = useRefreshPayload();
  const handleCancelClick = () => {
    activateModal('CANCEL_PURCHASE', {
      primaryAction: async () => {
        const { code } = await cancelPayment(
          buyInfoId as string,
          authStore,
          refreshPayload,
        );
        // TODO navigate to the previous page
        if (code === 9001) {
          alert('이미 송금을 한 구매 정보입니다.');
        }
      },
      secondaryAction: () => {},
    });
  };

  const handleRemittanceClick = () => {
    window.location.href = 'https://toss.me/majorfolio/4700';
  };

  useEffect(() => {
    if (buyInfoId && authStore) {
      getBuyInfo(authStore, parseInt(buyInfoId, 10), refreshPayload).then(
        (response) => {
          setBuyInfo(response);
        },
      );
    }
  }, [buyInfoId, authStore, setBuyInfo]);

  return (
    <>
      <AdviceContainer>
        <RemittanceContainer>
          <MarginBottom4>
            <Text
              size={20}
              weight="bold"
              lineHeight="sm"
              color="main_color/blue_p"
            >
              4,700원
            </Text>
          </MarginBottom4>
          <Text weight="bold" lineHeight="sm" color="gray/gray900">
            {' '}
            {materialInfo.title}{' '}
          </Text>
          <Text size={12} color="gray/gray500">
            14일 이내로 송금해주세요 (요청일 : {buyInfo?.createDate})<br />
            주문번호 : {buyInfoId}
          </Text>
        </RemittanceContainer>

        <AllDivider />

        <CodeAdviceContainer>
          <MarginBottom16>
            <Text size={22} lineHeight="lg" color="gray/gray900">
              아래 식별코드를
            </Text>
            <Text size={22} weight="bold" lineHeight="lg" color="gray/gray900">
              송금자명에 붙여넣어주세요
            </Text>
          </MarginBottom16>

          <CodeContainer>
            <Text size={16} lineHeight="lg" color="main_color/blue_p">
              {' '}
              {buyInfo?.code}{' '}
            </Text>
            <CopyButton
              onClick={() => {
                hanelCopyClick(buyInfo?.code);
              }}
            />
          </CodeContainer>

          <HelperTextWrapper>
            <HelperInfoIcon />
            <Text size={12} lineHeight="lg" color="gray/gray400">
              송금이 확인되는 대로 자료를 사용할 수 있으며, <br />
              최대 3 영업일이 소요될 수 있습니다.
            </Text>
          </HelperTextWrapper>
          <HelperTextWrapper>
            <HelperInfoIcon />
            <Text size={12} lineHeight="lg" color="gray/gray400">
              입금 전까지 ‘구매 내역’에서 구매를 취소할 수 있으며, <br />
              입금 후 자료 열람 전까지 ‘자료함’에서 환불요청할 수 있습니다.
            </Text>
          </HelperTextWrapper>
          <HelperTextWrapper>
            <HelperInfoIcon />
            <Text size={12} lineHeight="lg" color="gray/gray400">
              하나의 주문으로 묶인 자료는 한 번에 결제가 필요합니다. <br />
              개별 자료 구매를 원하시면 구매 취소 후 각각 주문해주세요.
            </Text>
          </HelperTextWrapper>
        </CodeAdviceContainer>
      </AdviceContainer>

      <StickyBottom>
        <BottomPaymentAmount />
        <ButtonWrapper>
          <Button
            type="button"
            category="secondary"
            onClick={() => {
              handleCancelClick();
            }}
          >
            <Text
              color="main_color/blue_p"
              size={16}
              weight="bold"
              lineHeight="sm"
            >
              구매취소
            </Text>
          </Button>
          <Button
            type="button"
            category="primary"
            onClick={() => {
              handleRemittanceClick();
            }}
          >
            <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
              송금하기
            </Text>
          </Button>
        </ButtonWrapper>
      </StickyBottom>

      <Modal
        {...modalProps}
        onPrimaryAction={closePrimarily}
        onSecondaryAction={closeSecondarily}
      />
    </>
  );
};

export default RemittanceAdvice;
