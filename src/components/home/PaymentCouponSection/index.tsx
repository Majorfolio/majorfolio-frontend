import React from 'react'

import * as S from './index.styles';
import { CouponDefaultIcon, ArrowRightOutlinedIcon } from '../../../assets/icons';

const PaymentCouponSection = () => {
  return (
    <S.CouponSection>
      <S.CouponCountWrapper>
        <S.CouponText>할인 쿠폰</S.CouponText>
        <S.CouponCountText>보유 쿠폰 2장</S.CouponCountText>
      </S.CouponCountWrapper>

      <S.CouponButton>
        <S.AvailableCouponWrapper>
          <CouponDefaultIcon />
          <S.CouponAvailableText>사용가능한 쿠폰이 1장 있어요</S.CouponAvailableText>
        </S.AvailableCouponWrapper>
        <ArrowRightOutlinedIcon />
      </S.CouponButton>
    </S.CouponSection>
  )
}

export default PaymentCouponSection