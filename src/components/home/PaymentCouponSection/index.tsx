import React, { useState } from 'react'

import { AvailableCouponButton, CouponCountWrapper, CouponSection, CouponWrapper, DisableCouponButton, GreyCouponRotate } from './index.styles';
import Text from '../../common/Text';
import { CouponDefaultIcon, ArrowRightOutlinedIcon, ArrowUpDefaultIcon, CouponGreyIcon } from '../../../assets/icons';

const PaymentCouponSection = () => {
  const [coupons, setCoupons] = useState<string[]>([]);

  return (
    coupons==null ?
      <CouponSection>
        <CouponCountWrapper>
          <Text size={14} lineHeight='sm' color='gray/gray900'>할인 쿠폰</Text>
          <Text size={14} lineHeight='sm' color='main_color/yellow_s'>보유 쿠폰 2장</Text>
        </CouponCountWrapper>

        <AvailableCouponButton>
          <CouponWrapper>
            <CouponDefaultIcon />
            <Text size={14} weight='bold' lineHeight='sm' color='main_color/yellow_s'>사용가능한 쿠폰이 1장 있어요</Text>
          </CouponWrapper>
          <ArrowRightOutlinedIcon />
        </AvailableCouponButton>
      </CouponSection>
      :
      <CouponSection>
        <CouponCountWrapper>
          <Text size={14} lineHeight='sm' color='gray/gray900'>할인 쿠폰</Text>
          <Text size={14} lineHeight='sm' color='gray/gray400'>보유 쿠폰 0장</Text>
        </CouponCountWrapper>

        <DisableCouponButton>
          <CouponWrapper>
            <CouponGreyIcon />
            <Text size={14} lineHeight='sm' color='gray/gray400'>사용가능한 쿠폰이 없어요</Text>
          </CouponWrapper>
          <GreyCouponRotate>
            <ArrowUpDefaultIcon />
          </GreyCouponRotate>
        </DisableCouponButton>
      </CouponSection>
  )
}

export default PaymentCouponSection