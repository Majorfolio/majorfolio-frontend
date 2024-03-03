import React from 'react'

import { CardWrapper, InfoWrapper, InfoWrapperSmall, MaterialInfosContainer, MaterialTitleWrapper, MaterialWrapper, ProfileWrapper } from './index.styles';

interface HomeMaterialCardSkeletonProps {
  isBig?: boolean;
}

const HomeMaterialCardSkeleton = ({ isBig = true }: HomeMaterialCardSkeletonProps) => {

  let cardSize: string;

  if(isBig) {
    cardSize = 'auto';
  } else {
    cardSize = '270px';
  }

  return (
    <CardWrapper
      style={{ width: cardSize }}>
      <ProfileWrapper />


      <MaterialWrapper>
        <MaterialTitleWrapper />

        <MaterialInfosContainer>
          <InfoWrapper />
          <InfoWrapper />
          <InfoWrapper />
          <InfoWrapper />
          <InfoWrapperSmall />
        </MaterialInfosContainer>       
      </MaterialWrapper>

      
    </CardWrapper>
  )
}

export default HomeMaterialCardSkeleton