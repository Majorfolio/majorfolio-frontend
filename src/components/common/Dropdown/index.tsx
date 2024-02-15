import React, { ChangeEvent, ReactNode, useRef, useState } from 'react';
import StyledCombobox, {
  StyledComoboxContainer,
  StyledDropdownContainer,
  StyledDropdownIcon,
  StyledListbox,
} from './index.styles';
import { ArrowDownDefaultIcon, HelperCancelIcon } from '../../../assets/icons';
import Text from '../Text';
import { ColorType } from '../theme';

interface DropdownPropsType {
  category: string;
  options: string[];
  borderColor?: ColorType;
  borderColorOnFocus?: ColorType;
  icon?: ReactNode;
  onFocus?: () => void;
  searchQuery: string;
  onSearchQueryUpdate: (value: string) => void;
}

export default function Dropdown({
  category,
  options,
  borderColor = 'gray/gray100',
  borderColorOnFocus = 'main_color/blue_p',
  icon = <ArrowDownDefaultIcon />,
  onFocus,
  searchQuery,
  onSearchQueryUpdate,
}: DropdownPropsType) {
  const [listBoxToggle, setListboxToggle] = useState<boolean>(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const dropdownListItem = filteredOptions.map((filteredOption) => (
    <li
      key={filteredOption}
      role="option"
      aria-selected="false"
      onClick={() => {
        onSearchQueryUpdate(filteredOption);
      }}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
      onKeyDown={() => {
        onSearchQueryUpdate(filteredOption);
      }}
    >
      <label htmlFor={filteredOption}>
        <input id={filteredOption} type="radio" />
        <Text size={16} lineHeight="lg" color="gray/gray500">
          {filteredOption}
        </Text>
      </label>
    </li>
  ));

  return (
    <StyledDropdownContainer>
      <StyledComoboxContainer>
        <StyledCombobox
          color="gray/gray900"
          borderColor={borderColor}
          borderColorOnFocus={borderColorOnFocus}
          size={16}
          weight="md"
          lineHeight="lg"
          name={category}
          value={searchQuery}
          onChange={(event) => onSearchQueryUpdate(event.target.value)}
          type="text"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-controls="select-dropdown"
          onFocus={() => {
            setListboxToggle(true);
            if (onFocus !== undefined) {
              onFocus();
            }
          }}
          onBlur={() => {
            setListboxToggle(false);
          }}
          placeholder={category}
        />
        <StyledDropdownIcon>{icon}</StyledDropdownIcon>
      </StyledComoboxContainer>
      {listBoxToggle && (
        <StyledListbox role="listbox">{dropdownListItem}</StyledListbox>
      )}
    </StyledDropdownContainer>
  );
}
