import React from 'react'

import { AmountContainer, TitleWrapper } from './index.styles';
import Text from '../../common/Text';
import AllDividerThin from '../../common/AllDividerThin';
import { CoffeeDefaultIcon } from '../../../assets/icons';

const BottomPaymentAmount = () => {
  return (
    <>
      <AllDividerThin />
      <AmountContainer>
        <TitleWrapper>
          <CoffeeDefaultIcon />
          <Text weight='bold' lineHeight='sm' color='main_color/blue_p'>자료 금액</Text>
        </TitleWrapper>

        <Text weight='bold' lineHeight='sm' color='main_color/blue_p'>4,700원</Text>
      </AmountContainer>    
    </>

  )
}

export default BottomPaymentAmount