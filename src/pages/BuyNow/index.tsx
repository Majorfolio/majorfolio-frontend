import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import PaymentSelectAllBar from '../../components/home/PaymentSelectAllBar';
import PaymentPostCard from '../../components/home/PaymentPostCard';
import AllDivider from '../../components/common/AllDivider';
import PaymentCouponSection from '../../components/home/PaymentCouponSection';
import PaymentAmountDetailSection from '../../components/home/PaymentAmountDetailSection';
import { ButtonWrapper, BuyNowContainer, StickyBottom } from './index.styles';
import BottomPaymentAmount from '../../components/home/BottomPaymentAmount';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import { Order } from '../../components/home/Payment/index.types';
import { updateBuyInfo } from '../../apis/payment';
import useAuthStore, { AuthLevel } from '../../store/useAuthStore';
import { PageContainer } from '../../components/common/GlobalStyle/index.styles';
import { SecondaryTopbar } from '../../components/common/TopBar';
import { ArrowBackDefaultIcon } from '../../assets/icons';
import useRefreshPayload from '../../hooks/common/useRefreshPayload';
import AllDividerThin from '../../components/common/AllDividerThin';
import useRequireAuth from '../../hooks/common/useRequireAuth';

const BuyNow = () => {
  const { materialId } = useParams();
  const location = useLocation();
  const materialInfo = location.state;
  const navigate = useNavigate();
  const authLevel = useAuthStore((state) => state.authLevel);
  const accessToken = useAuthStore((state) => state.accessToken)!;
  const { isAuthLevelSatisfied } = useRequireAuth(
    AuthLevel.Member,
    AuthLevel.Member,
  );

  const refreshPayload = useRefreshPayload();
  const handlePayNowClick = async () => {
    const dataToSend = materialInfo;
    const order: Order = {
      assignmentIdList: [{ assignmentId: parseInt(materialInfo.id, 10) }],
      couponIdList: [],
      totalPrice: 4700,
    };
    if (authLevel === AuthLevel.Member) {
      const data = await updateBuyInfo(accessToken, order, refreshPayload);
      navigate(`/RemittanceAdvice/${data.buyInfoId}`, {
        state: dataToSend,
        replace: true,
      });
    } else {
      navigate(`/RemittanceAdvice/${null}`, { state: dataToSend });
    }
  };

  if (!isAuthLevelSatisfied) {
    return <span />;
  }

  return (
    <>
      <SecondaryTopbar
        transition={
          <button type="button" onClick={() => navigate(-1)} aria-label="prev">
            <ArrowBackDefaultIcon />
          </button>
        }
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            결제하기
          </Text>
        }
      />
      <BuyNowContainer>
        <PaymentSelectAllBar isCart={false} />

        <AllDividerThin />
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
            disabled={authLevel < AuthLevel.Member}
          >
            <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
              바로 결제
            </Text>
          </Button>
        </ButtonWrapper>
      </StickyBottom>
    </>
  );
};

export default BuyNow;
