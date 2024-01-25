import React from 'react'

import * as S from './index.styles';
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
    <S.CardWrapper style={{ width: cardSize }}>
      <S.ProfileWrapper style={{ padding: '0px' }}>
        <MaterialSellerProfile hasReaction={false} />
      </S.ProfileWrapper>

      <AllDividerThin />

      <S.MaterialTitleWrapper>
        <Text size={20} weight='bold' lineHeight='sm' color='gray/gray900'>[과제] ALIDEA</Text>
        <AllTagSmall text='PDF' />
      </S.MaterialTitleWrapper>

      <S.MaterialInfosContainer>
        <S.InfoWrapper>
          <SchoolSmallIcon />
          <Text size={14} color='gray/gray500'>국민대학교</Text>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <DepartmentSmallIcon />
          <Text size={14} color='gray/gray500'>공업디자인학과</Text>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <SemesterSmallIcon />
          <Text size={14} color='gray/gray500'>23-1</Text>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <ProfessorSmallIcon />
          <Text size={14} color='gray/gray500'>홍길동</Text>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <ReactionSmallIcon />
          <Text size={14} color='gray/gray500'>10</Text>
        </S.InfoWrapper>
      </S.MaterialInfosContainer>
      
    </S.CardWrapper>
  )
}

export default HomeMaterialCard