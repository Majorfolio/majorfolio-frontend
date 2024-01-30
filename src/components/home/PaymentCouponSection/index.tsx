import React from 'react'

import { AvailableCouponWrapper, CouponButton, CouponCountWrapper, CouponSection } from './index.styles';
import Text from '../../common/Text';
import { CouponDefaultIcon, ArrowRightOutlinedIcon } from '../../../assets/icons';

const PaymentCouponSection = () => {
  return (
    <CouponSection>
      <CouponCountWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>할인 쿠폰</Text>
        <Text size={14} lineHeight='sm' color='main_color/yellow_s'>보유 쿠폰 2장</Text>
      </CouponCountWrapper>

      <CouponButton>
        <AvailableCouponWrapper>
          <CouponDefaultIcon />
          <Text size={14} weight='bold' lineHeight='sm' color='main_color/yellow_s'>사용가능한 쿠폰이 1장 있어요</Text>
        </AvailableCouponWrapper>
        <ArrowRightOutlinedIcon />
      </CouponButton>
    </CouponSection>
  )
}

export default PaymentCouponSection