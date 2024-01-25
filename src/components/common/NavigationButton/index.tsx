import React from 'react';
import { StyledIconContainer, StyledNavigationButton } from './index.styles';
import { ColorType } from '../theme';
import { NavigationButtonPropsTypes } from './index.types';

export default function NavigationButton({
  icon,
  label,
  backgroundColor = 'gray/gray100',
}: NavigationButtonPropsTypes) {
  return (
    <StyledNavigationButton type="button">
      <StyledIconContainer backgroundColor={backgroundColor}>
        {icon}
      </StyledIconContainer>
      <div>{label}</div>
    </StyledNavigationButton>
  );
}
