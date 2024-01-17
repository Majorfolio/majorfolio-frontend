import React from 'react'

import * as S from './index.styles';
import Text from '../../common/Text';
import AllTagSmall from '../../common/AllTagSmall';

interface HomeTagCardTitleProps {
  tag?: string;
}

function HomeTagCardTitle({ tag }: HomeTagCardTitleProps) {
  return (
    <S.TagCardTitleContainer>
      <S.TitleWrapper>
        <Text size={16} weight='bold' lineHeight='sm' color='gray/gray900'>최근에 본 자료</Text>
        {tag === 'new' ? <AllTagSmall text='NEW' color='green' /> : null}
        {tag === 'hot' ? <AllTagSmall text='HOT' color='red' /> : null}
      </S.TitleWrapper>

      <S.ViewAllButton>
        <Text size={14} lineHeight='sm' color='gray/gray400'>모두보기</Text>
      </S.ViewAllButton>
    </S.TagCardTitleContainer>
  )
}

export default HomeTagCardTitle