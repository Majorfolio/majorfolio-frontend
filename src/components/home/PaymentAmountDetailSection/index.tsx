import React from 'react'

import * as S from './index.styles';
import Text from '../../common/Text';
import AllDividerThin from '../../common/AllDividerThin';

const PaymentAmountDetailSection = () => {
  return (
    <S.DetailsWrapper>
      <S.DetailWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray500'>총 상품 금액</Text>
        <Text color='gray/gray900'>10,400원</Text>
      </S.DetailWrapper>

      <S.DetailWrapper>
        <S.CouponTitleWrapper>
          <S.CouponIcon />
          <Text size={14} weight='bold' lineHeight='sm' color='main_color/yellow_s'>사전예약 선착순 100명 할인 쿠폰</Text>
        </S.CouponTitleWrapper>
        <Text weight='bold' color='main_color/yellow_s'>-200원</Text>
      </S.DetailWrapper>

      <AllDividerThin />      

      <S.DetailWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>총 결제 금액</Text>
        <Text size={18} weight='bold' lineHeight='sm' color='gray/gray900'>10,200원</Text>
      </S.DetailWrapper>
    </S.DetailsWrapper>
  )
}

export default PaymentAmountDetailSection