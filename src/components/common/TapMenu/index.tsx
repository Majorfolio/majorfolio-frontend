import React, { useState } from 'react';

import { Container, MenusWrapper } from './index.styles';
import AllDividerThin from '../AllDividerThin';
import TapMenuList from '../TapMenuList';

interface TapMenuPropsType {
  labels?: [string, string];
}

function TapMenu({ labels = ['구매', '판매'] }: TapMenuPropsType) {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  const TapMenuArray = [
    {
      id: 1,
      label: labels[0],
    },
    {
      id: 2,
      label: labels[1],
    },
  ];

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
  );
}

export function SelectableTapMenu({
  labels = ['구매', '판매'],
  selectedItem,
  onItemClick,
}: TapMenuPropsType & {
  selectedItem: number;
  onItemClick: (index: number) => void;
}) {
  const TapMenuArray = [
    {
      id: 1,
      label: labels[0],
    },
    {
      id: 2,
      label: labels[1],
    },
  ];

  return (
    <Container>
      <MenusWrapper>
        {[...TapMenuArray].map((menuItem, index) => (
          <TapMenuList
            key={menuItem.id}
            label={menuItem.label}
            onClick={() => onItemClick(index)}
            isSelected={selectedItem === index}
          />
        ))}
      </MenusWrapper>
      <AllDividerThin />
    </Container>
  );
}

export default TapMenu;
