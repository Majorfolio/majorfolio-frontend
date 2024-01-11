import React from 'react'

import * as S from './PaymentSelectAllBar.styles';
import AllCheckbox from '../../common/AllCheckbox/AllCheckbox';

function PaymentSelectAllBar() {
  return (
    <S.SelectAllBarWrapper>
      <S.PaymentMaterialText>결제 자료</S.PaymentMaterialText>
      <S.SelectAllWrapper>
        <S.SelectAllText>전체 선택</S.SelectAllText>
        <AllCheckbox checked={false} />
      </S.SelectAllWrapper>
    </S.SelectAllBarWrapper>
  )
}

export default PaymentSelectAllBar