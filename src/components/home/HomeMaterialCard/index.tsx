import React from 'react'

import { useNavigate } from 'react-router-dom';
import { CardWrapper, InfoWrapper, MaterialInfosContainer, MaterialTitleWrapper, MaterialWrapper, ProfileWrapper } from './index.styles';
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
  id: number;
  nickname: string;
  className: string;
  univ?: string | null;
  major?: string | null;
  semester?: string | null;
  professor?: string | null;
  like?: number | null;
}

function HomeMaterialCard({ isBig = true, id, nickname, className, univ, major, semester, professor, like }: HomeMaterialCardProps) {
  const navigate = useNavigate();
  const handleMaterialClick = () => {
    navigate(`/assignment/${id}/detail`);
  }

  let cardSize: string;

  if(isBig) {
    cardSize = 'auto';
  } else {
    cardSize = '270px';
  }

  return (
    <CardWrapper style={{ width: cardSize }}>
      <ProfileWrapper>
        <MaterialSellerProfile nickname={nickname} hasReaction={false} />
      </ProfileWrapper>

      <AllDividerThin />

      <MaterialWrapper onClick={handleMaterialClick}>
        <MaterialTitleWrapper>
          <Text size={20} weight='bold' lineHeight='sm' color='gray/gray900'> {className} </Text>
          <AllTagSmall text='PDF' />
        </MaterialTitleWrapper>

        <MaterialInfosContainer>
          { univ &&
            <InfoWrapper>
              <SchoolSmallIcon />
              <Text size={14} color='gray/gray500'> {univ} </Text>
            </InfoWrapper>        
          }
          { major &&
            <InfoWrapper>
              <DepartmentSmallIcon />
              <Text size={14} color='gray/gray500'> {major} </Text>
            </InfoWrapper>        
          }
          { semester &&
            <InfoWrapper>
              <SemesterSmallIcon />
              <Text size={14} color='gray/gray500'> {semester} </Text>
            </InfoWrapper>        
          }
          { professor &&
            <InfoWrapper>
              <ProfessorSmallIcon />
              <Text size={14} color='gray/gray500'> {professor} </Text>
            </InfoWrapper>        
          }
          { like &&
            <InfoWrapper>
              <ReactionSmallIcon />
              <Text size={14} color='gray/gray500'> {like} </Text>
            </InfoWrapper>        
          }
        </MaterialInfosContainer>        
      </MaterialWrapper>

      
    </CardWrapper>
  )
}

export default HomeMaterialCard