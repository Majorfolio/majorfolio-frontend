import React from 'react'

import * as S from './index.styles';
import Text from '../../common/Text';
import AllDividerThin from '../../common/AllDividerThin';
import { CoffeeDefaultIcon } from '../../../assets/icons';

const BottomPaymentAmount = () => {
  return (
    <>
      <AllDividerThin />
      <S.AmountContainer>
        <S.TitleWrapper>
          <CoffeeDefaultIcon />
          <Text weight='bold' lineHeight='sm' color='main_color/blue_p'>자료 금액</Text>
        </S.TitleWrapper>

        <Text weight='bold' lineHeight='sm' color='main_color/blue_p'>5,200원</Text>
      </S.AmountContainer>    
    </>

  )
}

export default BottomPaymentAmount