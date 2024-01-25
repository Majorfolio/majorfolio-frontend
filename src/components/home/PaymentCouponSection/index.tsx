import React from 'react'

import * as S from './index.styles';
import Text from '../../common/Text';
import { CouponDefaultIcon, ArrowRightOutlinedIcon } from '../../../assets/icons';

const PaymentCouponSection = () => {
  return (
    <S.CouponSection>
      <S.CouponCountWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>할인 쿠폰</Text>
        <Text size={14} lineHeight='sm' color='main_color/yellow_s'>보유 쿠폰 2장</Text>
      </S.CouponCountWrapper>

      <S.CouponButton>
        <S.AvailableCouponWrapper>
          <CouponDefaultIcon />
          <Text size={14} weight='bold' lineHeight='sm' color='main_color/yellow_s'>사용가능한 쿠폰이 1장 있어요</Text>
        </S.AvailableCouponWrapper>
        <ArrowRightOutlinedIcon />
      </S.CouponButton>
    </S.CouponSection>
  )
}

export default PaymentCouponSection