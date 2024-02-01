import React, { ChangeEvent, useRef, useState } from 'react';
import StyledCombobox, {
  StyledComoboxContainer,
  StyledDropdownContainer,
  StyledDropdownIcon,
  StyledListbox,
} from './index.styles';
import { ArrowDownDefaultIcon } from '../../../assets/icons';
import Text from '../Text';

interface DropdownPropsType {
  category: string;
  options: string[];
}

export default function Dropdown({ category, options }: DropdownPropsType) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [listBoxToggle, setListboxToggle] = useState<boolean>(false);

  const onSchoolInputChange = (currentSchool: string) => {
    setSearchQuery(currentSchool);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const dropdownListItem = filteredOptions.map((filteredOption) => (
    <li
      key={filteredOption}
      role="option"
      aria-selected="false"
      onClick={() => {
        onSchoolInputChange(filteredOption);
      }}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
      onKeyDown={() => onSchoolInputChange(filteredOption)}
    >
      <label htmlFor={filteredOption}>
        <input id={filteredOption} type="radio" name="school" />
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
          size={16}
          weight="md"
          lineHeight="lg"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          type="text"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-controls="select-dropdown"
          onFocus={() => setListboxToggle(true)}
          onBlur={() => {
            setListboxToggle(false);
          }}
          placeholder={category}
        />
        <StyledDropdownIcon>
          <ArrowDownDefaultIcon />
        </StyledDropdownIcon>
      </StyledComoboxContainer>
      {listBoxToggle && (
        <StyledListbox role="listbox">{dropdownListItem}</StyledListbox>
      )}
    </StyledDropdownContainer>
  );
}

/* <StyledTextField
  type="email"
  placeholder={placeholder}
  color="gray/gray900"
  size={16}
  weight="md"
  lineHeight="lg"
  disabled={disabled}
  name="email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
  {...props}
/>; */
