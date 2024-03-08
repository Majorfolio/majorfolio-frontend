import React, { FormEvent, MouseEvent } from 'react';
import { BottomBarContainer, StickyContainer } from '../BottomBar/index.styles';
import Button from '../Button';
import Text from '../Text';
import StyledBottomButtonBar from './index.styles';

type BottomButtonBarType = {
  transitions: {
    text: string;
    onAction:
      | (() => void)
      | ((
          event?: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>,
        ) => Promise<void>);
    disabled?: boolean;
  }[];
};

export default function BottomButtonBar({ transitions }: BottomButtonBarType) {
  if (transitions.length === 2) {
    const [secondaryTransition, primaryTransition] = transitions;
    return (
      <StickyContainer>
        <StyledBottomButtonBar>
          <Button
            type="button"
            category="secondary"
            onClick={secondaryTransition.onAction}
            disabled={secondaryTransition.disabled}
          >
            <Text
              color="main_color/blue_p"
              size={16}
              weight="bold"
              lineHeight="sm"
            >
              {secondaryTransition.text}
            </Text>
          </Button>
          <Button
            type="button"
            category="primary"
            onClick={primaryTransition.onAction}
            disabled={secondaryTransition.disabled}
          >
            <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
              {primaryTransition.text}
            </Text>
          </Button>
        </StyledBottomButtonBar>
      </StickyContainer>
    );
  }

  if (transitions.length === 1) {
    const primaryTransition = transitions[0];
    return (
      <StickyContainer>
        <StyledBottomButtonBar>
          <Button onClick={primaryTransition.onAction} category="primary">
            <Text size={16} weight="bold" lineHeight="sm">
              {primaryTransition.text}
            </Text>
          </Button>
        </StyledBottomButtonBar>
      </StickyContainer>
    );
  }

  throw new Error('렌더링 에러');
}
