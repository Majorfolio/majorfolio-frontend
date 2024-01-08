import React from 'react'

import * as S from './DetailPost.styles';
import Tag from '../../common/AllTagSmall/AllTagSmall';

interface DetailPostProps {
  title: string,
  content: string
}

function DetailPost({ title, content }: DetailPostProps) {
  return (
    <S.PostWrapper>
      <S.PostTitle>{ title }</S.PostTitle>
      <S.TagWrapper><Tag text="PDF" /></S.TagWrapper>
      <S.PostContent>{ content }</S.PostContent>
    </S.PostWrapper>
  )
}

export default DetailPost;