import React, { useRef, useState, MouseEvent } from 'react'

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
import { addToLocalStorageArrayWithUniqueID } from '../LocalStorageUtils';

interface HomeMaterialCardProps {
  isBig?: boolean;
  id: number;
  memberId: number;
  imageUrl: string;
  nickname: string;
  className: string;
  univ: string;
  major: string;
  semester: string;
  professor?: string | null;
  like?: number;
}

function HomeMaterialCard({ isBig = true, id, memberId, imageUrl, nickname, className, univ, major, semester, professor, like=0 }: HomeMaterialCardProps) {
  const navigate = useNavigate();

  let cardSize: string;

  if(isBig) {
    cardSize = 'auto';
  } else {
    cardSize = '270px';
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [isClickEnabled, setIsClickEnabled] = useState<boolean>(true);
  const MIN_DRAG_DISTANCE = 10;
  let distance = 0;

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setIsClickEnabled(false);
    if (!containerRef.current) return;
    setStartX(event.pageX - containerRef.current.offsetLeft);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const x = event.pageX - containerRef.current.offsetLeft;
    distance = Math.abs(x - startX);
    if (distance >= MIN_DRAG_DISTANCE) {
      setIsClickEnabled(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (distance < MIN_DRAG_DISTANCE) {
      setIsClickEnabled(true);
    }
  };

  const handleMaterialClick = (event: MouseEvent<HTMLDivElement>) => {
    if (isClickEnabled) {
      const materialObj = {
        id,
        memberId,
        imageUrl,
        nickname,
        className,
        univ,
        major,
        semester,
        professor,
        like,
      };
      addToLocalStorageArrayWithUniqueID("recent-materials", materialObj);
      navigate(`/assignment/${id}/detail`);
    }
  }

  return (
    <CardWrapper 
      style={{ width: cardSize }} 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
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
          { like != null &&
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