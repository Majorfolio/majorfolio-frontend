import React, { useState } from 'react'

import * as S from './AllCheckbox.styles';
import { CheckboxUnselectedIcon, CheckboxFilledIcon } from '../../../assets/icons';

interface AllCheckboxProps {
  checked: boolean
}

function AllCheckbox({ checked }: AllCheckboxProps)  {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  }
  
  return (
    <S.CheckboxWrapper onClick={handleCheckbox}>
      {isChecked ? <CheckboxFilledIcon /> : <CheckboxUnselectedIcon />}
    </S.CheckboxWrapper>
  )
}

export default AllCheckbox