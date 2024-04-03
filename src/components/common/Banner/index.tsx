import React from 'react'

import Text from '../Text'
import { BannerWrapper, ContentWrapper, ImgWrapper, TagWrapper, TextWrapper } from './index.styles'
import AllTagBig from '../AllTagBig'
import bellIcon from '../../../assets/images/landing/landing-bell.png';
import theme, { ColorType } from '../theme'

interface BannerPropsType {
  titleText: React.ReactNode;
  subtitleText: string;
  titleColor?: ColorType;
  subtitleColor?: ColorType;
  backgroundColor?: ColorType;
  bannerIcon?: string;
  onClick?: () => void;
}

function Banner({ 
  titleText, 
  subtitleText, 
  titleColor='gray/white', 
  subtitleColor='gray/white', 
  backgroundColor='main_color/blue_p', 
  bannerIcon=bellIcon, 
  onClick 
}: BannerPropsType) {
  return (
    <BannerWrapper backgroundColor={backgroundColor} onClick={onClick} >
      <TagWrapper>
        <AllTagBig text='공지사항' color='dark' />
      </TagWrapper>

      <ContentWrapper>
        <TextWrapper>
          <Text size={22} weight='bold' lineHeight='lg' color={titleColor}> {titleText} </Text>
          <Text size={14} lineHeight='sm' color={subtitleColor}> {subtitleText} </Text>
        </TextWrapper>

        <ImgWrapper src={bannerIcon} alt='아이콘' width={100} />
      </ContentWrapper>
      
    </BannerWrapper>
  )
}

export default Banner