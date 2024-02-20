import React from 'react'

import { SelectAllBarWrapper, SelectAllWrapper } from './index.styles';
import Text from '../../common/Text';
import AllCheckbox from '../../common/AllCheckbox';

interface PaymentSelectAllBarProps {
  isCart: boolean;
}

function PaymentSelectAllBar({ isCart }: PaymentSelectAllBarProps) {
  return (
    <SelectAllBarWrapper>
      <Text weight='bold' lineHeight='sm' color='gray/gray900'>결제 자료</Text>

      {isCart ? 
        <SelectAllWrapper>
          <Text lineHeight='sm' color='gray/gray500'>전체 선택</Text>
          <AllCheckbox checked={false} /> 
        </SelectAllWrapper>
        : null
      }
      
    </SelectAllBarWrapper>
  )
}

export default PaymentSelectAllBar