import React from 'react'

import Text from '../Text'
import { BannerWrapper, ContentWrapper, ImgWrapper, TagWrapper, TextWrapper } from './index.styles'
import AllTagBig from '../AllTagBig'

function Banner() {
  return (
    <BannerWrapper>
      <TagWrapper>
        <AllTagBig text='공지사항' color='dark' />
      </TagWrapper>

      <ContentWrapper>
        <TextWrapper>
          <Text size={22} weight='bold' lineHeight='lg' color='gray/white'>사전예약하고<br/>3가지 혜택 받자!</Text>
          <Text size={14} lineHeight='sm' color='gray/white'>헤택을 확인해보세요!</Text>
        </TextWrapper>

        <ImgWrapper />
      </ContentWrapper>
      
    </BannerWrapper>
  )
}

export default Banner