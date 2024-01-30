import React, { useState } from 'react'

import { CheckboxWrapper } from './index.styles';
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
    <CheckboxWrapper onClick={handleCheckbox}>
      {isChecked ? <CheckboxFilledIcon /> : <CheckboxUnselectedIcon />}
    </CheckboxWrapper>
  )
}

export default AllCheckbox