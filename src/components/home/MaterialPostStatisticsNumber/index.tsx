import React from 'react'

import { NumberWrapper, NumbersConatainer } from './index.styles'
import Text from '../../common/Text'

function MaterialPostStatisticsNumber() {
  return (
    <NumbersConatainer>
      <NumberWrapper>
        <Text size={18} weight='bold' lineHeight='sm'>00</Text>
        <Text size={14} lineHeight='sm'>판매</Text>
      </NumberWrapper>

      <NumberWrapper>
        <Text size={18} weight='bold' lineHeight='sm'>00</Text>
        <Text size={14} lineHeight='sm'>팔로워</Text>
      </NumberWrapper>
      
      <NumberWrapper>
        <Text size={18} weight='bold' lineHeight='sm'>00</Text>
        <Text size={14} lineHeight='sm'>반응</Text>
      </NumberWrapper>
    </NumbersConatainer>
  )
}

export default MaterialPostStatisticsNumber