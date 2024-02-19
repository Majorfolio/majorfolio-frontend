import React from 'react'
import { useLocation } from 'react-router-dom';
import { HelperInfoIcon } from '../../assets/icons';
import { PageContainer } from '../Home/index.styles';
import { AdviceContainer, CodeAdviceContainer, CodeContainer, HelperTextWrapper, MarginBottom16, MarginBottom4, RemittanceContainer, StickyBottom, ButtonWrapper, CopyButton } from './index.styles';
import AllDivider from '../../components/common/AllDivider';
import Text from '../../components/common/Text';
import BottomPaymentAmount from '../../components/home/BottomPaymentAmount';
import Button from '../../components/common/Button';

const RemittanceAdvice = () => {
  const location = useLocation();
  const materialInfo = location.state;

  const hanelCopyClick = () => {

  };

  const handleCancelClick = () => {

  };

  const handleRemittanceClick = () => {

  };

  return (
    <PageContainer>
      <AdviceContainer>
        <RemittanceContainer>
          <MarginBottom4>
            <Text size={20} weight='bold' lineHeight='sm' color='main_color/blue_p'>4,700원</Text>
          </MarginBottom4>
          <Text weight='bold' lineHeight='sm' color='gray/gray900'> {materialInfo.title} </Text>
          <Text size={12} color='gray/gray500'>
            2024/03/06까지 송금해주세요 (요청일 : 2024/02/21)<br />
            주문번호 : 1023591
          </Text>
        </RemittanceContainer>

        <AllDivider />

        <CodeAdviceContainer>
          <MarginBottom16>
            <Text size={22} lineHeight='lg' color='gray/gray900'>아래 식별코드를</Text>
            <Text size={22} weight='bold' lineHeight='lg' color='gray/gray900'>송금자명에 붙여넣어주세요</Text>            
          </MarginBottom16>

          <CodeContainer>
            <Text size={16} lineHeight='lg' color='main_color/blue_p'>1Q2W3E4R5T6Y</Text>
            <CopyButton onClick={hanelCopyClick} />
          </CodeContainer>

          <HelperTextWrapper>
            <HelperInfoIcon />
            <Text size={12} lineHeight='lg' color='gray/gray400'>
              송금이 확인되는 대로 자료를 사용할 수 있으며, <br />
              최대 3 영업일이 소요될 수 있습니다.
            </Text>
          </HelperTextWrapper>
          <HelperTextWrapper>
            <HelperInfoIcon />
            <Text size={12} lineHeight='lg' color='gray/gray400'>
              입금 전까지 ‘구매 내역’에서 구매를 취소할 수 있으며, <br />
              입금 후 자료 열람 전까지 ‘자료함’에서 환불요청할 수 있습니다.
            </Text>
          </HelperTextWrapper>
          <HelperTextWrapper>
            <HelperInfoIcon />
            <Text size={12} lineHeight='lg' color='gray/gray400'>
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
            backgroundColor="sub_color/indigo/c"
            onClick={() => {
              handleCancelClick();
            }}
          >
            <Text color="main_color/blue_p" size={16} weight="bold" lineHeight="sm">
              구매취소
            </Text>
          </Button>            
          <Button
            type="button"
            backgroundColor="main_color/blue_p"
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
    </PageContainer>
  )
}

export default RemittanceAdvice