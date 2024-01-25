import React, { ChangeEvent, useState } from 'react';
import StyledCombobox, {
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
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [listBoxToggle, setListboxToggle] = useState<boolean>(false);

  const onSchoolInputChange = (currentSchool: string) => {
    setSelectedSchool(currentSchool);
    setListboxToggle((previousListboxToggle) => !previousListboxToggle);
  };

  const dropdownListItem = options.map((option) => (
    <li
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
      <StyledCombobox
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="select-dropdown"
        onClick={() =>
          setListboxToggle((previousListboxToggle) => !previousListboxToggle)
        }
      >
        {selectedSchool ? (
          <Text color="gray/gray900" size={16} lineHeight="lg">
            {selectedSchool}
          </Text>
        ) : (
          <Text color="gray/gray400" size={16} lineHeight="lg">
            {category}
          </Text>
        )}

        <StyledDropdownIcon>
          <ArrowDownDefaultIcon />
        </StyledDropdownIcon>
      </StyledCombobox>

      {listBoxToggle && (
        <StyledListbox role="listbox">{dropdownListItem}</StyledListbox>
      )}
    </StyledDropdownContainer>
  );
}
