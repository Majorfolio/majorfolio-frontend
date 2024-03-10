import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { SecondaryBlackTopbar, SecondaryTopbar } from '../../components/common/TopBar'
import { CloseWhiteIcon } from '../../assets/icons'
import Text from '../../components/common/Text'
import { BlackBackground, PreviewConatainer, PreviewImage, PreviewRollingWrapper } from './index.styles'
import { getPreviewImages } from '../../apis/materials'

const Preview = () => {
  const navigate = useNavigate();
  const { materialId } = useParams();
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    if (materialId) {
      getPreviewImages(parseInt(materialId, 10)).then((data) => {
        const { result } = data;
        setPreviewImages(result.previews);
      });
    }    
  }, [materialId])

  return (
    <BlackBackground>
      <SecondaryBlackTopbar
        transition={
          <button type="button" onClick={() => navigate(-1)} aria-label="close">
            <CloseWhiteIcon />
          </button>
        }
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/white">
            미리보기
          </Text>
        }
        icons={[]}
      />
      <PreviewConatainer>
        <PreviewRollingWrapper>
          { previewImages &&
            previewImages.map((images: string) => {
              return <PreviewImage src={images} alt='미리보기이미지' />
            })
          }
        </PreviewRollingWrapper>
      </PreviewConatainer>
    </BlackBackground>
  )
}

export default Preview