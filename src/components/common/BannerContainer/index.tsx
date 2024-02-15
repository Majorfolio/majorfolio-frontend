import React from 'react'

import Banner from '../Banner'
import { BannerContainerWrapper } from './index.styles'

function BannerContainer() {
  return (
    <BannerContainerWrapper>
      <Banner />
      <Banner />
      <Banner />
    </BannerContainerWrapper>
  )
}

export default BannerContainer