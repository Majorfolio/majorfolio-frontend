import React from 'react'

import { PostTitleTextWrapper, PostTitleWrapper, PostWrapper, TagWrapper } from './index.styles';
import Text from '../../common/Text';
import Tag from '../../common/AllTagSmall';

interface DetailPostProps {
  title: string,
  content: string,
  updateTime: string,
}

function DetailPost({ title, content, updateTime }: DetailPostProps) {
  return (
    <PostWrapper>
      <PostTitleWrapper>
        <PostTitleTextWrapper>
          <Text size={20} weight='bold' lineHeight='sm' color='gray/gray900'> {title} </Text>
        </PostTitleTextWrapper>
        <TagWrapper><Tag text="PDF" color="white" /></TagWrapper>        
        <Text size={12} lineHeight='sm' color='gray/gray400'> {`${updateTime.split('T')[0]} ${updateTime.split('T')[1]?.split('.')[0]}`} </Text>
      </PostTitleWrapper>

      <Text size={14} lineHeight='lg' color='gray/gray900'> {content} </Text>
    </PostWrapper>
  )
}

export default DetailPost;