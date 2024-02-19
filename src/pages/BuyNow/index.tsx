import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import PaymentSelectAllBar from '../../components/home/PaymentSelectAllBar'
import PaymentPostCard from '../../components/home/PaymentPostCard'
import AllDivider from '../../components/common/AllDivider'
import PaymentCouponSection from '../../components/home/PaymentCouponSection'
import PaymentAmountDetailSection from '../../components/home/PaymentAmountDetailSection'
import { ButtonWrapper, BuyNowContainer, PageContainer, StickyBottom } from './index.styles'
import BottomPaymentAmount from '../../components/home/BottomPaymentAmount'
import Button from '../../components/common/Button'
import Text from '../../components/common/Text'

const BuyNow = () => {
  const { materialId } = useParams();
  const location = useLocation();
  const materialInfo = location.state;
  const navigate = useNavigate();

  const handlePayNowClick = () => {
    const dataToSend = materialInfo;
    navigate(`/RemittanceAdvice`, { state: dataToSend });
  };

  return (
    <PageContainer>
      <BuyNowContainer>
        <PaymentSelectAllBar isCart={false} />
        { materialId ?
          <PaymentPostCard isCart={false} materialInfo={materialInfo} />
          : null
        }

        <AllDivider />
        <PaymentCouponSection />
        
        <AllDivider />
        <PaymentAmountDetailSection />

      </BuyNowContainer>     
      <StickyBottom>
        <BottomPaymentAmount />
        <ButtonWrapper>
          <Button
            type="button"
            backgroundColor="main_color/blue_p"
            onClick={() => {
              handlePayNowClick();
            }}
          >
            <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
              바로 결제
            </Text>
          </Button>            
        </ButtonWrapper>
      </StickyBottom>

    </PageContainer>
  )
}

export default BuyNow