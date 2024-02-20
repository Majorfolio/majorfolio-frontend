import React, { useState } from 'react'

import { CouponIcon, CouponTitleWrapper, DetailWrapper, DetailsWrapper } from './index.styles';
import Text from '../../common/Text';
import AllDividerThin from '../../common/AllDividerThin';

const PaymentAmountDetailSection = () => {
  const [coupons, setCoupons] = useState<string[]>([]);
  return (
    <DetailsWrapper>
      <DetailWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray500'>총 상품 금액</Text>
        <Text color='gray/gray900'>4,700원</Text>
      </DetailWrapper>

      { coupons == null ?
        <DetailWrapper>
          <CouponTitleWrapper>
            <CouponIcon />
            <Text size={14} weight='bold' lineHeight='sm' color='main_color/yellow_s'>사전예약 선착순 100명 할인 쿠폰</Text>
          </CouponTitleWrapper>
          <Text weight='bold' color='main_color/yellow_s'>-200원</Text>
        </DetailWrapper>
        : null
      }


      <AllDividerThin />      

      <DetailWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>총 결제 금액</Text>
        <Text size={18} weight='bold' lineHeight='sm' color='gray/gray900'>4,700원</Text>
      </DetailWrapper>
    </DetailsWrapper>
  )
}

export default PaymentAmountDetailSection