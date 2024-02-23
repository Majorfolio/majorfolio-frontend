import React, { ReactNode } from 'react';
import Text from '../Text';
import StyledCheckbox, { StyledIconContainer } from './index.styles';

interface CheckboxWithIconPropsType {
  isChecked: boolean;
  onCheckboxChange: () => void;
  id: string;
  text: string;
  icon: ReactNode;
}

export default function CheckboxWithIcon({
  id,
  text,
  icon,
  onCheckboxChange,
  isChecked,
  ...props
}: CheckboxWithIconPropsType) {
  return (
    <StyledCheckbox htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        onChange={onCheckboxChange}
        {...props}
        checked={isChecked}
      />
      <StyledIconContainer>{icon}</StyledIconContainer>
      {text && (
        <Text size={14} color="gray/gray900" lineHeight="sm">
          {text}
        </Text>
      )}
    </StyledCheckbox>
  );
}
