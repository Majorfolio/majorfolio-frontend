import React from 'react'

import { TitleWrapper } from './index.styles';
import Text from '../../common/Text';
import { AllSchoolsOutinedIcon } from '../../../assets/icons';

interface HomeContentPageTitleProps {
  title: string;
}

function HomeContentPageTitle({ title }: HomeContentPageTitleProps) {
  return (
    <TitleWrapper>
      <AllSchoolsOutinedIcon />
      <span>
        <Text size={20} weight='bold' lineHeight='sm' color='main_color/blue_p'> {title} </Text>
        <Text size={20} weight='bold' lineHeight='sm' color='gray/gray900'>의 자료</Text>      
      </span>
      
    </TitleWrapper>
  )
}

export default HomeContentPageTitle