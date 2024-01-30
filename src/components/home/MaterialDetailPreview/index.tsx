import React from 'react'

import { PreviewButton, PreviewImage, PreviewWrapper } from './index.styles';
import Text from '../../common/Text';

function MaterialDetailPreview() {
  return (
    <PreviewWrapper>
      <PreviewImage src='http://placehold.co/400' alt='미리보기 이미지' />
      <PreviewButton>
        <Text weight='bold' lineHeight='sm' color='gray/white'>미리보기</Text>
      </PreviewButton>
    </PreviewWrapper>
  )
}

export default MaterialDetailPreview