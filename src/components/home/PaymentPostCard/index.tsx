import React from 'react'

import { CardTitleWrapper, CardWrapper, InfoWrapper, InfosWrapper, MaterialPriceWrapper } from './index.styles';
import Text from '../../common/Text';
import AllCheckbox from '../../common/AllCheckbox';
import { 
  SchoolDefaultIcon, 
  DepartmentOutlinedIcon, 
  SemesterDefaultIcon, 
  ClassDefaultIcon 
} from '../../../assets/icons';

function PaymentPostCard() {
  return (
    <CardWrapper>
      <CardTitleWrapper>
        <Text size={20} weight='bold' lineHeight='sm' color='gray/gray900'>[과제] ALIDEA</Text>
        <AllCheckbox checked={false} />
      </CardTitleWrapper>
      
      <InfosWrapper>
        <InfoWrapper>
          <SchoolDefaultIcon />
          <Text size={14} color='gray/gray500'>국민대학교</Text>
        </InfoWrapper>

        <InfoWrapper>
          <DepartmentOutlinedIcon />
          <Text size={14} color='gray/gray500'>공업디자인학과</Text>
        </InfoWrapper>

        <InfoWrapper>
          <SemesterDefaultIcon />
          <Text size={14} color='gray/gray500'>23-1</Text>
        </InfoWrapper>

        <InfoWrapper>
          <ClassDefaultIcon />
          <Text size={14} color='gray/gray500'>게임디자인과 기획</Text>
        </InfoWrapper>
      </InfosWrapper>

      <MaterialPriceWrapper>
        <Text size={14} color='gray/gray500'>자료 금액</Text>
        <Text weight='bold' color='gray/gray900'>5,200원</Text>
      </MaterialPriceWrapper>
    </CardWrapper>
  )
}

export default PaymentPostCard