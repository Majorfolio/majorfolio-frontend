import React from 'react'

import * as S from './index.styles';
import Text from '../../common/Text';
import { 
  PostTitleDefaultIcon, 
  SchoolDefaultIcon, 
  DepartmentOutlinedIcon, 
  SemesterDefaultIcon, 
  ClassDefaultIcon, 
  ProfessorDefaultIcon, 
  CreditDefaultIcon, 
  ScoreDefaultIcon, 
  PageDefaultIcon 
} from '../../../assets/icons';

function MaterialDetailInfo() {
  return (
    <S.InfosWrapper>
      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <PostTitleDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>자료 제목</Text>
        </S.InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>[과제] ALIDEA</Text>
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <SchoolDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>학교</Text>
        </S.InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>국민대학교</Text>
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <DepartmentOutlinedIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>학과</Text>
        </S.InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>공업디자인학과</Text>
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <SemesterDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>시기</Text>
        </S.InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>23-1</Text>
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <ClassDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>수업</Text>
        </S.InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>게임디자인과 기획</Text>
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <ProfessorDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>담당교수</Text>
        </S.InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>홍길동</Text>
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <CreditDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>학점</Text>
        </S.InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>A+</Text>
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <ScoreDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>점수</Text>
        </S.InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>90/100</Text>
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <PageDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>페이지</Text>
        </S.InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>4</Text>
      </S.InfoWrapper>
    </S.InfosWrapper>
  )
}

export default MaterialDetailInfo