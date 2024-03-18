import React, {
  useRef,
  useState,
  MouseEvent,
  ReactNode,
  useEffect,
} from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import {
  CardWrapper,
  InfoWrapper,
  MaterialInfosContainer,
  MaterialTitleWrapper,
  MaterialWrapper,
  ProfileWrapper,
} from './index.styles';
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
import useAuthStore, { AuthLevel } from '../../../store/useAuthStore';
import { getMy } from '../../../apis/member';
import useRefreshPayload from '../../../hooks/common/useRefreshPayload';

interface HomeMaterialCardProps {
  isBig?: boolean;
  id: number;
  memberId: number;
  profileImage: string;
  nickName: string;
  className: string;
  univ: string;
  major: string;
  semester: string;
  professor?: string | null;
  like?: number;
  header: ReactNode;
  onClick?: () => void;
  isScrollable?: boolean;
}

function HomeMaterialCard({
  isBig = true,
  id,
  memberId,
  profileImage,
  nickName,
  className,
  univ,
  major,
  semester,
  professor,
  like = 0,
  header,
  onClick,
  isScrollable = false,
}: HomeMaterialCardProps) {
  const navigate = useNavigate();
  const location = useLocation();

  let cardSize: string;

  if (isBig) {
    cardSize = 'auto';
  } else {
    cardSize = '270px';
  }

  const refreshPayload = useRefreshPayload();

  const accessToken = useAuthStore((state) => state.accessToken);
  const authLevel = useAuthStore((state) => state.authLevel);

  const [myNickName, setMyNickName] = useState<string>('');

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
    if (isClickEnabled && location.pathname !== '/material-box') {
      const materialObj = {
        id,
        memberId,
        profileImage,
        nickName,
        className,
        univ,
        major,
        semester,
        professor,
        like,
      };
      addToLocalStorageArrayWithUniqueID('recent-materials', materialObj);

      // navigate(`/assignment/my/8/detail/5`); // 테스트용

      if (nickName !== myNickName) {
        navigate(`/assignment/${id}/detail/${memberId}/${profileImage}`);
      } else {
        navigate(`/assignment/my/${id}/detail/${memberId}/${profileImage}`);
      }
    }
  };

  useEffect(() => {
    const asyncEffect = async () => {
      if (authLevel === AuthLevel.Member && accessToken) {
        const { nickName: fetchedNickName } = await getMy(
          accessToken,
          refreshPayload,
        );
        setMyNickName(fetchedNickName);
      }
    };
    asyncEffect();
  }, []);

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
        {!!header && header}
        {/* <MaterialSellerProfile nickname={nickname} hasReaction={false} /> */}
      </ProfileWrapper>

      <AllDividerThin />

      <MaterialWrapper onClick={onClick || handleMaterialClick}>
        <MaterialTitleWrapper>
          <Text size={20} weight="bold" lineHeight="sm" color="gray/gray900">
            {' '}
            {className}{' '}
          </Text>
          <AllTagSmall text="PDF" />
        </MaterialTitleWrapper>

        <MaterialInfosContainer>
          {univ && (
            <InfoWrapper>
              <SchoolSmallIcon />
              <Text size={14} color="gray/gray500">
                {' '}
                {univ}{' '}
              </Text>
            </InfoWrapper>
          )}
          {major && (
            <InfoWrapper>
              <DepartmentSmallIcon />
              <Text size={14} color="gray/gray500">
                {' '}
                {major}{' '}
              </Text>
            </InfoWrapper>
          )}
          {semester && (
            <InfoWrapper>
              <SemesterSmallIcon />
              <Text size={14} color="gray/gray500">
                {' '}
                {semester}{' '}
              </Text>
            </InfoWrapper>
          )}
          {professor && (
            <InfoWrapper>
              <ProfessorSmallIcon />
              <Text size={14} color="gray/gray500">
                {' '}
                {professor}{' '}
              </Text>
            </InfoWrapper>
          )}
          {like != null && (
            <InfoWrapper>
              <ReactionSmallIcon />
              <Text size={14} color="gray/gray500">
                {' '}
                {like}{' '}
              </Text>
            </InfoWrapper>
          )}
        </MaterialInfosContainer>
      </MaterialWrapper>
    </CardWrapper>
  );
}

export default HomeMaterialCard;
