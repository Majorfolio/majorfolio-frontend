import React from 'react'

import * as S from './index.styles';
import Text from '../Text';

interface TapMenuListProps {
  label: string,
  onClick: React.MouseEventHandler<HTMLDivElement>
  isSelected: boolean,
}

function TapMenuList({ label, onClick, isSelected }: TapMenuListProps) {
  return (
    isSelected ? (
      <S.SelectedList onClick={onClick}>
        <Text weight='bold' lineHeight='sm' color='gray/gray900'>{ label }</Text>
      </S.SelectedList>   
    ) : (
      <S.UnSelectedList onClick={onClick}>
        <Text lineHeight='sm' color='gray/gray400'>{ label }</Text>
      </S.UnSelectedList>
    )
  )
}

export default TapMenuList