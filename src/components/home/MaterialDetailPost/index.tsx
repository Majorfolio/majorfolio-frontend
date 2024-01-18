import React from 'react'

import * as S from './index.styles';
import Text from '../../common/Text';
import Tag from '../../common/AllTagSmall';

interface DetailPostProps {
  title: string,
  content: string
}

function DetailPost({ title, content }: DetailPostProps) {
  return (
    <S.PostWrapper>
      <S.PostTitleWrapper>
        <Text size={20} weight='bold' lineHeight='sm' color='gray/gray900'>{ title }</Text>
        <S.TagWrapper><Tag text="PDF" color="white" /></S.TagWrapper>        
        <Text size={12} lineHeight='sm' color='gray/gray400'>2024.01.19 14:00</Text>
      </S.PostTitleWrapper>

      <Text size={14} lineHeight='lg' color='gray/gray900'>{ content }</Text>
    </S.PostWrapper>
  )
}

export default DetailPost;