import React from 'react'
import { useNavigate } from 'react-router-dom';

import { PreviewButton, PreviewImage, PreviewWrapper } from './index.styles';
import Text from '../../common/Text';

interface MaterialDetailPreviewProps {
  image: string;
  materialId: number;
}

function MaterialDetailPreview({ image, materialId }: MaterialDetailPreviewProps) {
  const navigate = useNavigate();

  const handlePreviewClick = () => {
    navigate(`/assignment/${materialId}/preview`)
  };

  return (
    <PreviewWrapper>
      <PreviewImage src={image} alt='미리보기 이미지' />
      
      {/* TODO: 미리보기 버튼 구조 변경 필요 */}
      { materialId !== 0 ? (
        <PreviewButton onClick={handlePreviewClick}>
          <Text weight='bold' lineHeight='sm' color='gray/white'>미리보기</Text>
        </PreviewButton>
      ) : null}
      {/* <PreviewButton
        href={image} 
        target="_blank"
      >
        <Text weight='bold' lineHeight='sm' color='gray/white'>미리보기</Text>
      </PreviewButton> */}
    </PreviewWrapper>
  )
}

export default MaterialDetailPreview