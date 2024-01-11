import React, { useState } from 'react'

import * as S from './index.styles';
import { CheckboxUnselectedIcon, CheckboxFilledIcon } from '../../../assets/icons';

export interface AllCheckboxProps {
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