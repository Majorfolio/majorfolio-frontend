import React, { ReactNode } from 'react'

import Banner from '../Banner'
import { BannerContainerWrapper } from './index.styles'

interface BannerContainerProps {
  children: ReactNode;
}

function BannerContainer({ children }: BannerContainerProps) {
  return (
    <BannerContainerWrapper>
      { children }
    </BannerContainerWrapper>
  )
}

export default BannerContainer