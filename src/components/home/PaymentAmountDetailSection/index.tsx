import React from 'react'

import * as S from './index.styles';
import AllDividerThin from '../../common/AllDividerThin';

const PaymentAmountDetailSection = () => {
  return (
    <S.DetailsWrapper>
      <S.DetailWrapper>
        <span>총 상품 금액</span>
        <span>10,400원</span>
      </S.DetailWrapper>

      <S.DetailWrapper>
        <span>총 즉시 할인</span>
        <span>-200원</span>
      </S.DetailWrapper>

      <AllDividerThin />      

      <S.DetailWrapper>
        <span>총 결제 금액</span>
        <span>10,200원</span>
      </S.DetailWrapper>
    </S.DetailsWrapper>
  )
}

export default PaymentAmountDetailSection