import React from 'react'

import * as S from './index.styles';

function MaterialDetailPreview() {
  return (
    <S.PreviewWrapper>
      <S.PreviewImage src='http://placehold.co/400' alt='미리보기 이미지' />
      <S.PreviewButton>미리보기</S.PreviewButton>
    </S.PreviewWrapper>
  )
}

export default MaterialDetailPreview