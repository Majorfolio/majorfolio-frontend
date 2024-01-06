import React from 'react'

import * as S from './DetailPost.styles';
import Tag from '../AllTagSmall/AllTagSmall';

const DetailPost = ({ title, content }) => {
  return (
    <>
      <S.PostWrapper>
        <S.PostTitle>{ title }</S.PostTitle>
        <S.TagWrapper><Tag text={'PDF'} /></S.TagWrapper>
        <S.PostContent>{ content }</S.PostContent>
      </S.PostWrapper>
    </>
  )
}

export default DetailPost