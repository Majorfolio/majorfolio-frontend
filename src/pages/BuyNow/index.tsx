import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import PaymentSelectAllBar from '../../components/home/PaymentSelectAllBar';
import PaymentPostCard from '../../components/home/PaymentPostCard';
import AllDivider from '../../components/common/AllDivider';
import PaymentCouponSection from '../../components/home/PaymentCouponSection';
import PaymentAmountDetailSection from '../../components/home/PaymentAmountDetailSection';
import {
  ButtonWrapper,
  BuyNowContainer,
  PageContainer,
  StickyBottom,
} from './index.styles';
import BottomPaymentAmount from '../../components/home/BottomPaymentAmount';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import { Order } from '../../components/home/Payment/index.types';
import { updateBuyInfo } from '../../apis/payments';
import useAuthStore from '../../store/authStore';

const BuyNow = () => {
  const { materialId } = useParams();
  const location = useLocation();
  const materialInfo = location.state;
  const navigate = useNavigate();
  const authStore = useAuthStore((state) => state.accessToken);
  let response: Response;

  const handlePayNowClick = async () => {
    const dataToSend = materialInfo;
    const order: Order = {
      assignmentIdList: [{ assignmentId: parseInt(materialInfo.id, 10) }],
      couponIdList: [],
      totalPrice: 4700,
    };
    if (authStore) {
      response = await updateBuyInfo(authStore, order);
      const data = await response.json();
      navigate(`/RemittanceAdvice/${data.buyInfoId}`, { state: dataToSend });
    } else {
      navigate(`/RemittanceAdvice/${null}`, { state: dataToSend });
    }
  };

  return (
    <PageContainer>
      <BuyNowContainer>
        <PaymentSelectAllBar isCart={false} />
        {materialId ? (
          <PaymentPostCard isCart={false} materialInfo={materialInfo} />
        ) : null}

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
            category="primary"
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
  );
};

export default BuyNow;
