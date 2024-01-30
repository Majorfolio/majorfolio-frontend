import React from 'react'

import { TitleWrapper } from './index.styles';
import Text from '../../common/Text';
import { AllSchoolsFilledIcon } from '../../../assets/icons';

function HomeContentPageTitle() {
  return (
    <TitleWrapper>
      <AllSchoolsFilledIcon />
      <span>
        <Text size={20} weight='bold' lineHeight='sm' color='main_color/blue_p'>모든 대학교</Text>
        <Text size={20} weight='bold' lineHeight='sm' color='gray/gray900'>의 자료</Text>      
      </span>
      
    </TitleWrapper>
  )
}

export default HomeContentPageTitle