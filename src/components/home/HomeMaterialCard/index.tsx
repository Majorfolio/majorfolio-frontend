import React from 'react'

import { CardWrapper, InfoWrapper, MaterialInfosContainer, MaterialTitleWrapper, ProfileWrapper } from './index.styles';
import Text from '../../common/Text';
import MaterialSellerProfile from '../MaterialSellerProfile';
import AllDividerThin from '../../common/AllDividerThin';
import AllTagSmall from '../../common/AllTagSmall';
import { 
  SchoolSmallIcon, 
  DepartmentSmallIcon, 
  SemesterSmallIcon, 
  ProfessorSmallIcon, 
  ReactionSmallIcon,
} from '../../../assets/icons';

interface HomeMaterialCardProps {
  isBig?: boolean;
}

function HomeMaterialCard({ isBig = true }: HomeMaterialCardProps) {
  let cardSize: string;

  if(isBig) {
    cardSize = 'auto';
  } else {
    cardSize = '270px';
  }

  return (
    <CardWrapper style={{ width: cardSize }}>
      <ProfileWrapper style={{ padding: '0px' }}>
        <MaterialSellerProfile hasReaction={false} />
      </ProfileWrapper>

      <AllDividerThin />

      <MaterialTitleWrapper>
        <Text size={20} weight='bold' lineHeight='sm' color='gray/gray900'>[과제] ALIDEA</Text>
        <AllTagSmall text='PDF' />
      </MaterialTitleWrapper>

      <MaterialInfosContainer>
        <InfoWrapper>
          <SchoolSmallIcon />
          <Text size={14} color='gray/gray500'>국민대학교</Text>
        </InfoWrapper>
        <InfoWrapper>
          <DepartmentSmallIcon />
          <Text size={14} color='gray/gray500'>공업디자인학과</Text>
        </InfoWrapper>
        <InfoWrapper>
          <SemesterSmallIcon />
          <Text size={14} color='gray/gray500'>23-1</Text>
        </InfoWrapper>
        <InfoWrapper>
          <ProfessorSmallIcon />
          <Text size={14} color='gray/gray500'>홍길동</Text>
        </InfoWrapper>
        <InfoWrapper>
          <ReactionSmallIcon />
          <Text size={14} color='gray/gray500'>10</Text>
        </InfoWrapper>
      </MaterialInfosContainer>
      
    </CardWrapper>
  )
}

export default HomeMaterialCard