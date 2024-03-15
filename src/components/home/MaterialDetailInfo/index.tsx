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

interface MaterialDetailInfoProps {
  title: string,
  univ: string,
  major: string,
  semester: string,
  subjectTitle: string,
  professor: string,
  grade: string,
  score: number,
  pages: number,
}

function MaterialDetailInfo({ title, univ, major, semester, subjectTitle, professor, grade, score, pages }: MaterialDetailInfoProps) {
  return (
    <InfosWrapper>
      <InfoWrapper>
        <InfoTitleWrapper>
          <PostTitleDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>자료 제목</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'> 
          { title?.length < 16 ? (title) : (`${title?.slice(0, 16)}...`) }
        </Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <SchoolDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>학교</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'> {univ} </Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <DepartmentOutlinedIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>학과</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'> {major} </Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <SemesterDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>시기</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'> {semester} </Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <ClassDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>수업</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'> 
          { subjectTitle?.length < 16 ? (subjectTitle) : (`${subjectTitle?.slice(0, 16)}...`) }
        </Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <ProfessorDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>담당교수</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'> {professor} </Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <CreditDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>학점</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'> {grade} </Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <ScoreDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>점수</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'> {score} </Text>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitleWrapper>
          <PageDefaultIcon />
          <Text size={14} lineHeight='sm' color='gray/gray500'>페이지</Text>
        </InfoTitleWrapper>
        <Text size={14} lineHeight='sm' color='gray/gray900'> {pages} </Text>
      </InfoWrapper>
    </InfosWrapper>
  )
}

export default MaterialDetailInfo