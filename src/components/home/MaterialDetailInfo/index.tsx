import React from 'react'

import { InfoTitleWrapper, InfoWrapper, InfosWrapper } from './index.styles';
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
    <InfosWrapper>
      <InfoWrapper>
        <InfoTitleWrapper>
          <PostTitleDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>자료 제목</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>[과제] ALIDEA</Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <SchoolDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>학교</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>국민대학교</Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <DepartmentOutlinedIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>학과</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>공업디자인학과</Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <SemesterDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>시기</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>23-1</Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <ClassDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>수업</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>게임디자인과 기획</Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <ProfessorDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>담당교수</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>홍길동</Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <CreditDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>학점</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>A+</Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <ScoreDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>점수</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>90/100</Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <PageDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>페이지</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'>4</Text>
      </InfoWrapper>
    </InfosWrapper>
  )
}

export default MaterialDetailInfo