import React, { ReactNode } from 'react';
import {
  StyledIconContainer,
  StyledIconRow,
  StyledTopbarContainer,
  StyledPrimaryTopbarWrapper,
  StyledSecondaryTopbarWrapper,
  StyledLeftSection,
} from './index.styles';
import {
  AppLogoIcon,
  CartDefaultIcon,
  NotificationDefaultIcon,
} from '../../../assets/icons';

interface TopBarPropsType {
  transition?: ReactNode;
  title: ReactNode;
  icons?: ReactNode[];
}

export function PrimaryTopbar({ transition, title, icons }: TopBarPropsType) {
  return (
    <StyledTopbarContainer>
      <StyledPrimaryTopbarWrapper>
        {title}
        <StyledIconRow>
          {icons?.map((icon) => (
            <StyledIconContainer>{icon}</StyledIconContainer>
          ))}
        </StyledIconRow>
      </StyledPrimaryTopbarWrapper>
    </StyledTopbarContainer>
  );
}

export function SecondaryTopbar({ transition, title, icons }: TopBarPropsType) {
  return (
    <StyledTopbarContainer>
      <StyledSecondaryTopbarWrapper>
        <StyledLeftSection>
          <StyledIconContainer>{transition}</StyledIconContainer>
          {title}
        </StyledLeftSection>
        <StyledIconRow>
          {icons?.map((icon) => (
            <StyledIconContainer>{icon}</StyledIconContainer>
          ))}
        </StyledIconRow>
      </StyledSecondaryTopbarWrapper>
    </StyledTopbarContainer>
  );
}
