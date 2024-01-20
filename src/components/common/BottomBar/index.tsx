import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import * as S from './index.styles';
import Text from '../Text';
import AllDividerThin from '../AllDividerThin';
import {
  HomeFilledIcon,
  HomeDefaultIcon,
  TaskboxFilledIcon,
  TaskboxDefaultIcon,
  UploadFilledIcon,
  UploadDefaultIcon,
  MyFilledIcon,
  MyDefaultIcon,
} from '../../../assets/icons';

function BottomBar() {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const handleNavigationClick = (page: number) => {
    setCurrentPage(page);

    switch (page) {
      case 0:
        navigate('/home');
        break;
      case 1:
        // navigate('/material-box');
        break;
      case 2:
        // navigate('/upload');
        break;
      case 3:
        // navigate('/my');
        break;
      default:
        break;
    }

    // 페이지 이동 후 새로고침, 스크롤 위치 맨 위
    // window.location.reload();
    // window.scrollTo(0, 0);
  }

  return (
    <S.StickyContainer>
      <AllDividerThin />

      <S.BottomBarContainer>

        <S.RadioNavigationWrapper>
          <S.CustomRadioNavigation
            type='radio'
            id='home'
            name='bottomBar'
            checked={currentPage === 0}
            onChange={() => handleNavigationClick(0)}
            onClick={() => handleNavigationClick(0)}
          />
          <S.CustomRadioNavigation
            type='radio'
            id='taskbox'
            name='bottomBar'
            checked={currentPage === 1}
            onChange={() => handleNavigationClick(1)}
            onClick={() => handleNavigationClick(1)}
          />
          <S.CustomRadioNavigation
            type='radio'
            id='upload'
            name='bottomBar'
            checked={currentPage === 2}
            onChange={() => handleNavigationClick(2)}
            onClick={() => handleNavigationClick(2)}
          />
          <S.CustomRadioNavigation
            type='radio'
            id='my'
            name='bottomBar'
            checked={currentPage === 3}
            onChange={() => handleNavigationClick(3)}
            onClick={() => handleNavigationClick(3)}
          />        
        </S.RadioNavigationWrapper>

        <S.IconsContainer>
          {currentPage === 0 ? (
            <S.IconWrapper>
              <HomeFilledIcon />
              <Text size={10} weight='bold' lineHeight='sm' color='main_color/blue_p'>홈</Text>            
            </S.IconWrapper>
          ) : (
            <S.IconWrapper>
              <HomeDefaultIcon />
              <Text size={10} lineHeight='sm' color='gray/gray200'>홈</Text>
            </S.IconWrapper>
          )}
          {currentPage === 1 ? (
            <S.IconWrapper>
              <TaskboxFilledIcon />
              <Text size={10} weight='bold' lineHeight='sm' color='main_color/blue_p'>자료함</Text>            
            </S.IconWrapper>
          ) : (
            <S.IconWrapper>
              <TaskboxDefaultIcon />
              <Text size={10} lineHeight='sm' color='gray/gray200'>자료함</Text>
            </S.IconWrapper>
          )}
          {currentPage === 2 ? (
            <S.IconWrapper>
              <UploadFilledIcon />
              <Text size={10} weight='bold' lineHeight='sm' color='main_color/blue_p'>업로드</Text>            
            </S.IconWrapper>
          ) : (
            <S.IconWrapper>
              <UploadDefaultIcon />
              <Text size={10} lineHeight='sm' color='gray/gray200'>업로드</Text>
            </S.IconWrapper>
          )}
          {currentPage === 3 ? (
            <S.IconWrapper>
              <MyFilledIcon />
              <Text size={10} weight='bold' lineHeight='sm' color='main_color/blue_p'>MY</Text>            
            </S.IconWrapper>
          ) : (
            <S.IconWrapper>
              <MyDefaultIcon />
              <Text size={10} lineHeight='sm' color='gray/gray200'>MY</Text>
            </S.IconWrapper>
          )}
        </S.IconsContainer>

      </S.BottomBarContainer>      
    </S.StickyContainer>

  )
}

export default BottomBar