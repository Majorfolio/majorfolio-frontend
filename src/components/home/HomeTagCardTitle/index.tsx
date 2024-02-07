import React from 'react'

import { TagCardTitleContainer, TitleWrapper, ViewAllButton } from './index.styles';
import Text from '../../common/Text';
import AllTagSmall from '../../common/AllTagSmall';

interface HomeTagCardTitleProps {
  title: string;
  tag?: string;
  isViewAll?: boolean;
}

function HomeTagCardTitle({ title, tag, isViewAll=false }: HomeTagCardTitleProps) {
  return (
    <TagCardTitleContainer>
      <TitleWrapper>
        <Text size={16} weight='bold' lineHeight='sm' color='gray/gray900'>{ title }</Text>
        {tag === 'new' ? <AllTagSmall text='NEW' color='green' /> : null}
        {tag === 'hot' ? <AllTagSmall text='HOT' color='red' /> : null}
      </TitleWrapper>

      {isViewAll ? (<span />) : (<ViewAllButton><Text size={14} lineHeight='sm' color='gray/gray400'>모두보기</Text></ViewAllButton>)}
      
    </TagCardTitleContainer>
  )
}

export default HomeTagCardTitle