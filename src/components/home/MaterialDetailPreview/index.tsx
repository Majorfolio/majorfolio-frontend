import React from 'react'

import { PreviewButton, PreviewImage, PreviewWrapper } from './index.styles';
import Text from '../../common/Text';

interface MaterialDetailPreviewProps {
  image: string;
}

function MaterialDetailPreview({ image }: MaterialDetailPreviewProps) {
  return (
    <PreviewWrapper>
      <PreviewImage src={image} alt='미리보기 이미지' />
      
      {/* TODO: 미리보기 버튼 구조 변경 필요 */}
      <PreviewButton
        href={image} 
        target="_blank"
      >
        <Text weight='bold' lineHeight='sm' color='gray/white'>미리보기</Text>
      </PreviewButton>
    </PreviewWrapper>
  )
}

export default MaterialDetailPreview