import React, { useState } from 'react'

import { Container, MenusWrapper } from './index.styles';
import AllDividerThin from '../AllDividerThin';
import TapMenuList from '../TapMenuList';

function TapMenu() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  }

  const TapMenuArray = [
    {
      id: 1,
      label: '구매',
    },
    {
      id: 2,
      label: '판매',
    }
  ]

  return (
    <Container>
      <MenusWrapper>
        {[...TapMenuArray].map((menuItem, index) => (
          <TapMenuList
            key={menuItem.id}
            label={menuItem.label}
            onClick={(e) => handleItemClick(index)}
            isSelected={selectedItem === index}
          />
        ))}
      </MenusWrapper>    
      <AllDividerThin />
    </Container>
  )
}

export default TapMenu