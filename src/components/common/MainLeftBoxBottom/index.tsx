import React from 'react'

import { DescriptionWrapper, LeftBoxBottomContainer, QrCodeWrapper, RotateRight, SurveyButton } from './index.styles'
import Text from '../Text'
import QrPng from '../../../assets/images/qr.png'

const MainLeftBoxBottom = () => {
  return (
    <LeftBoxBottomContainer>
      <DescriptionWrapper>
        <Text size={22} lineHeight='lg'>메이저폴리오의 발전을 위해</Text>
        <Text size={22} weight='bold' lineHeight='lg'>여러분의 목소리를 들려주세요</Text>        
        <SurveyButton onClick={() => {window.open('https://han.gl/G7Ql3');}}>
          <Text size={16}>설문 참여하기</Text>
          <RotateRight />
        </SurveyButton>     
      </DescriptionWrapper>

      <QrCodeWrapper>
        <img src={QrPng} alt="큐알코드" />
      </QrCodeWrapper>


    </LeftBoxBottomContainer>
  )
}

export default MainLeftBoxBottom