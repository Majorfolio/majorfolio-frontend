import React from 'react'
import { useNavigate } from 'react-router-dom'

import Text from '../Text'
import { BannerWrapper, ContentWrapper, ImgWrapper, TagWrapper, TextWrapper } from './index.styles'
import AllTagBig from '../AllTagBig'
import bellIcon from '../../../assets/images/landing/landing-bell.png';


function Banner() {
  const navigate = useNavigate();
  const handleBannerClick = () => {
    navigate(`/landing`);
  }

  return (
    <BannerWrapper onClick={handleBannerClick}>
      <TagWrapper>
        <AllTagBig text='공지사항' color='dark' />
      </TagWrapper>

      <ContentWrapper>
        <TextWrapper>
          <Text size={22} weight='bold' lineHeight='lg' color='gray/white'>사전예약하고<br/>3가지 혜택 받자!</Text>
          <Text size={14} lineHeight='sm' color='gray/white'>헤택을 확인해보세요!</Text>
        </TextWrapper>

        <ImgWrapper src={bellIcon} alt='아이콘' width={100} />
      </ContentWrapper>
      
    </BannerWrapper>
  )
}

export default Banner