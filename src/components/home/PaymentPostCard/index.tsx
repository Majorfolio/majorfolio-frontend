import React from 'react'

import * as S from './index.styles';
import { SchoolDefaultIcon, DepartmentOutlinedIcon, SemesterDefaultIcon, ClassDefaultIcon } from '../../../assets/icons';
import AllCheckbox from '../../common/AllCheckbox';

function PaymentPostCard() {
  return (
    <S.CardWrapper>
      <S.CardTitleWrapper>
        <S.TitleText>[과제] ALIDEA</S.TitleText>
        <AllCheckbox checked={false} />
      </S.CardTitleWrapper>
      
      <S.InfosWrapper>
        <S.InfoWrapper>
          <SchoolDefaultIcon />
          <S.InfoContentText>국민대학교</S.InfoContentText>
        </S.InfoWrapper>

        <S.InfoWrapper>
          <DepartmentOutlinedIcon />
          <S.InfoContentText>공업디자인학과</S.InfoContentText>
        </S.InfoWrapper>

        <S.InfoWrapper>
          <SemesterDefaultIcon />
          <S.InfoContentText>23-1</S.InfoContentText>
        </S.InfoWrapper>

        <S.InfoWrapper>
          <ClassDefaultIcon />
          <S.InfoContentText>게임디자인과 기획</S.InfoContentText>
        </S.InfoWrapper>
      </S.InfosWrapper>

      <S.MaterialPriceWrapper>
        <S.InfoContentText>자료 금액</S.InfoContentText>
        <S.MaterialPriceText>5,200원</S.MaterialPriceText>
      </S.MaterialPriceWrapper>
    </S.CardWrapper>
  )
}

export default PaymentPostCard