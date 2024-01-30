import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { BottomBarContainer, CustomRadioNavigation, IconWrapper, IconsContainer, RadioNavigationWrapper, StickyContainer } from './index.styles';
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
    <StickyContainer>
      <AllDividerThin />

      <BottomBarContainer>

        <RadioNavigationWrapper>
          <CustomRadioNavigation
            type='radio'
            id='home'
            name='bottomBar'
            checked={currentPage === 0}
            onChange={() => handleNavigationClick(0)}
            onClick={() => handleNavigationClick(0)}
          />
          <CustomRadioNavigation
            type='radio'
            id='taskbox'
            name='bottomBar'
            checked={currentPage === 1}
            onChange={() => handleNavigationClick(1)}
            onClick={() => handleNavigationClick(1)}
          />
          <CustomRadioNavigation
            type='radio'
            id='upload'
            name='bottomBar'
            checked={currentPage === 2}
            onChange={() => handleNavigationClick(2)}
            onClick={() => handleNavigationClick(2)}
          />
          <CustomRadioNavigation
            type='radio'
            id='my'
            name='bottomBar'
            checked={currentPage === 3}
            onChange={() => handleNavigationClick(3)}
            onClick={() => handleNavigationClick(3)}
          />        
        </RadioNavigationWrapper>

        <IconsContainer>
          {currentPage === 0 ? (
            <IconWrapper>
              <HomeFilledIcon />
              <Text size={10} weight='bold' lineHeight='sm' color='main_color/blue_p'>홈</Text>            
            </IconWrapper>
          ) : (
            <IconWrapper>
              <HomeDefaultIcon />
              <Text size={10} lineHeight='sm' color='gray/gray200'>홈</Text>
            </IconWrapper>
          )}
          {currentPage === 1 ? (
            <IconWrapper>
              <TaskboxFilledIcon />
              <Text size={10} weight='bold' lineHeight='sm' color='main_color/blue_p'>자료함</Text>            
            </IconWrapper>
          ) : (
            <IconWrapper>
              <TaskboxDefaultIcon />
              <Text size={10} lineHeight='sm' color='gray/gray200'>자료함</Text>
            </IconWrapper>
          )}
          {currentPage === 2 ? (
            <IconWrapper>
              <UploadFilledIcon />
              <Text size={10} weight='bold' lineHeight='sm' color='main_color/blue_p'>업로드</Text>            
            </IconWrapper>
          ) : (
            <IconWrapper>
              <UploadDefaultIcon />
              <Text size={10} lineHeight='sm' color='gray/gray200'>업로드</Text>
            </IconWrapper>
          )}
          {currentPage === 3 ? (
            <IconWrapper>
              <MyFilledIcon />
              <Text size={10} weight='bold' lineHeight='sm' color='main_color/blue_p'>MY</Text>            
            </IconWrapper>
          ) : (
            <IconWrapper>
              <MyDefaultIcon />
              <Text size={10} lineHeight='sm' color='gray/gray200'>MY</Text>
            </IconWrapper>
          )}
        </IconsContainer>

      </BottomBarContainer>      
    </StickyContainer>

  )
}

export default BottomBar