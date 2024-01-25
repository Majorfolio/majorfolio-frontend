import React from 'react'

import * as S from './index.styles';
import Text from '../../common/Text';

function MaterialDetailPreview() {
  return (
    <S.PreviewWrapper>
      <S.PreviewImage src='http://placehold.co/400' alt='미리보기 이미지' />
      <S.PreviewButton>
        <Text weight='bold' lineHeight='sm' color='gray/white'>미리보기</Text>
      </S.PreviewButton>
    </S.PreviewWrapper>
  )
}

export default MaterialDetailPreview