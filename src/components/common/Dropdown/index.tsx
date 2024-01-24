import React, { ChangeEvent, useState } from 'react';
import StyledCombobox, {
  StyledDropdownContainer,
  StyledDropdownIcon,
  StyledListbox,
} from './index.styles';
import { ArrowDownDefaultIcon } from '../../../assets/icons';
import Text from '../Text';

interface DropdownPropsType {
  options: string[];
  id: string;
  htmlFor: string;
}

const schools = [
  '건국대학교',
  '국민대학교',
  '서울대학교',
  '연세대학교',
  '고려대학교',
  '카이스트',
  'Sceinces Po Grenoble',
  'UGA',
];

export default function Dropdown({ options, id, htmlFor }: DropdownPropsType) {
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [listBoxToggle, setListboxToggle] = useState<boolean>(false);

  const onSchoolInputChange = (currentSchool: string) => {
    setSelectedSchool(currentSchool);
    setListboxToggle((previousListboxToggle) => !previousListboxToggle);
  };

  const dropdownListItem = schools.map((school) => (
    <li
      role="option"
      aria-selected="false"
      onClick={() => onSchoolInputChange(school)}
      onKeyDown={() => onSchoolInputChange(school)}
    >
      <label htmlFor={school}>
        <input id={school} type="radio" name="school" />
        <Text size={16} lineHeight="lg" color="gray/gray500">
          {school}
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
            학교
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
