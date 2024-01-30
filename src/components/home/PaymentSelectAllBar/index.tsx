import React from 'react'

import { SelectAllBarWrapper, SelectAllWrapper } from './index.styles';
import Text from '../../common/Text';
import AllCheckbox from '../../common/AllCheckbox';

function PaymentSelectAllBar() {
  return (
    <SelectAllBarWrapper>
      <Text weight='bold' lineHeight='sm' color='gray/gray900'>결제 자료</Text>
      <SelectAllWrapper>
        <Text lineHeight='sm' color='gray/gray500'>전체 선택</Text>
        <AllCheckbox checked={false} />
      </SelectAllWrapper>
    </SelectAllBarWrapper>
  )
}

export default PaymentSelectAllBar