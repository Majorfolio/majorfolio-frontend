import React from 'react'

import * as S from './index.styles';
import { PostTitleDefaultIcon, SchoolDefaultIcon, DepartmentOutlinedIcon, SemesterDefaultIcon, ClassDefaultIcon, ProfessorDefaultIcon, CreditDefaultIcon, ScoreDefaultIcon } from '../../../assets/icons';

function MaterialDetailInfo() {
  return (
    <S.InfosWrapper>
      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <PostTitleDefaultIcon />
          <S.InfoTitle>자료 제목</S.InfoTitle>
        </S.InfoTitleWrapper>
        <S.InfoContent>
          [과제] ALIDEA
        </S.InfoContent>  
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <SchoolDefaultIcon />
          <S.InfoTitle>학교</S.InfoTitle>
        </S.InfoTitleWrapper>
        <S.InfoContent>
          국민대학교
        </S.InfoContent>  
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <DepartmentOutlinedIcon />
          <S.InfoTitle>학과</S.InfoTitle>
        </S.InfoTitleWrapper>
        <S.InfoContent>
          공업디자인학과
        </S.InfoContent>  
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <SemesterDefaultIcon />
          <S.InfoTitle>시기</S.InfoTitle>
        </S.InfoTitleWrapper>
        <S.InfoContent>
          23-1
        </S.InfoContent>  
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <ClassDefaultIcon />
          <S.InfoTitle>수업</S.InfoTitle>
        </S.InfoTitleWrapper>
        <S.InfoContent>
          게임디자인과 기획
        </S.InfoContent>  
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <ProfessorDefaultIcon />
          <S.InfoTitle>담당교수</S.InfoTitle>
        </S.InfoTitleWrapper>
        <S.InfoContent>
          홍길동
        </S.InfoContent>  
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <CreditDefaultIcon />
          <S.InfoTitle>학점</S.InfoTitle>
        </S.InfoTitleWrapper>
        <S.InfoContent>
          A+
        </S.InfoContent>  
      </S.InfoWrapper>

      <S.InfoWrapper>
        <S.InfoTitleWrapper>
          <ScoreDefaultIcon />
          <S.InfoTitle>점수</S.InfoTitle>
        </S.InfoTitleWrapper>
        <S.InfoContent>
          90/100
        </S.InfoContent>  
      </S.InfoWrapper>
    </S.InfosWrapper>
  )
}

export default MaterialDetailInfo