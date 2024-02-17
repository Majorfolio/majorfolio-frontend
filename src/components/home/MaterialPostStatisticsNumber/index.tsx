import React from 'react'

import { NumberWrapper, NumbersConatainer } from './index.styles'
import Text from '../../common/Text'

interface MaterialPostStatisticsNumberProps {
  sell: number;
  follower: number;
  reaction: number;
}

function MaterialPostStatisticsNumber({ sell, follower, reaction }: MaterialPostStatisticsNumberProps) {
  return (
    <NumbersConatainer>
      <NumberWrapper>
        <Text size={18} weight='bold' lineHeight='sm'> {sell} </Text>
        <Text size={14} lineHeight='sm'>판매</Text>
      </NumberWrapper>

      <NumberWrapper>
        <Text size={18} weight='bold' lineHeight='sm'> {follower} </Text>
        <Text size={14} lineHeight='sm'>팔로워</Text>
      </NumberWrapper>
      
      <NumberWrapper>
        <Text size={18} weight='bold' lineHeight='sm'> {reaction} </Text>
        <Text size={14} lineHeight='sm'>반응</Text>
      </NumberWrapper>
    </NumbersConatainer>
  )
}

export default MaterialPostStatisticsNumber