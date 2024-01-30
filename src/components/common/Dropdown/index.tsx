import React, { ChangeEvent, useState } from 'react';
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
    console.log(currentSchool);
    setSearchQuery(currentSchool);
    setListboxToggle((currentToggle) => !currentToggle);
  };

  const dropdownListItem = options.map((option) => (
    <li
      id={option}
      role="option"
      aria-selected="false"
      onClick={() => onSchoolInputChange(option)}
      onKeyDown={() => onSchoolInputChange(option)}
    >
      <label htmlFor={option}>
        <input id={option} type="radio" name="school" />
        <Text size={16} lineHeight="lg" color="gray/gray500">
          {option}
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
