import React from 'react'

import * as S from './index.styles';
import Text from '../../common/Text';
import AllCheckbox from '../../common/AllCheckbox';

function PaymentSelectAllBar() {
  return (
    <S.SelectAllBarWrapper>
      <Text weight='bold' lineHeight='sm' color='gray/gray900'>결제 자료</Text>
      <S.SelectAllWrapper>
        <Text lineHeight='sm' color='gray/gray500'>전체 선택</Text>
        <AllCheckbox checked={false} />
      </S.SelectAllWrapper>
    </S.SelectAllBarWrapper>
  )
}

export default PaymentSelectAllBar