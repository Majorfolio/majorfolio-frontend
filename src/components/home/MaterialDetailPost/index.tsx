import React from 'react'

import { PostTitleWrapper, PostWrapper, TagWrapper } from './index.styles';
import Text from '../../common/Text';
import Tag from '../../common/AllTagSmall';

interface DetailPostProps {
  title: string,
  content: string
}

function DetailPost({ title, content }: DetailPostProps) {
  return (
    <PostWrapper>
      <PostTitleWrapper>
        <Text size={20} weight='bold' lineHeight='sm' color='gray/gray900'>{ title }</Text>
        <TagWrapper><Tag text="PDF" color="white" /></TagWrapper>        
        <Text size={12} lineHeight='sm' color='gray/gray400'>2024.01.19 14:00</Text>
      </PostTitleWrapper>

      <Text size={14} lineHeight='lg' color='gray/gray900'>{ content }</Text>
    </PostWrapper>
  )
}

export default DetailPost;