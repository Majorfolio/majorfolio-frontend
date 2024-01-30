import React from 'react'

import { SelectedList, UnSelectedList } from './index.styles';
import Text from '../Text';

interface TapMenuListProps {
  label: string,
  onClick: React.MouseEventHandler<HTMLDivElement>
  isSelected: boolean,
}

function TapMenuList({ label, onClick, isSelected }: TapMenuListProps) {
  return (
    isSelected ? (
      <SelectedList onClick={onClick}>
        <Text weight='bold' lineHeight='sm' color='gray/gray900'>{ label }</Text>
      </SelectedList>   
    ) : (
      <UnSelectedList onClick={onClick}>
        <Text lineHeight='sm' color='gray/gray400'>{ label }</Text>
      </UnSelectedList>
    )
  )
}

export default TapMenuList