import React from 'react';

import * as S from "./Landing.styles";

import dollarIcon from '../../assets/images/landing/landing-dollar.png';
import clipBoardIcon from '../../assets/images/landing/landing-clipboard.png';
import calendarIcon from '../../assets/images/landing/landing-calendar.png';
import pencilIcon from '../../assets/images/landing/landing-pencil.png';

const Landing = () => {
  return (
    <>
      <S.Container>
        <S.MfWrapper>
          <S.MfImg1 />
          <S.MfImg2 />
        </S.MfWrapper>

        <S.LogoWrapper>
          <S.Logo />
        </S.LogoWrapper>

        <S.Text1>지난 학기 잘 만든 과제를 볼 수 있다는<br/>사실을 알고 계셨나요?</S.Text1>
        <S.SpeechBubbleWrapper>
          <S.CenterAlign>선배들의 과제나 자료,<br/>보고 싶지 않으신가요?</S.CenterAlign>
          <S.B1>
            선배한테 직접 물어보기는 무서워..
          </S.B1>
          <S.B2>
            잘하고 싶은데 방법을 모르겠어 ㅠㅠ
          </S.B2>
          <S.B3>
            어떡하지
          </S.B3>
          <S.B4>
            어려워..
          </S.B4>
          <S.B5>
            이 툴은 어떻게 쓰는거지?
          </S.B5>
          <S.B6>
            작년 이 수업에서 A+ 받은 과제가 뭘까?
          </S.B6>
        </S.SpeechBubbleWrapper>

        <S.CurveWrapper>
          <S.WhiteText>선배들의 자료들을 커피 한 잔 값으로<br/>사고 성장할 수 있습니다!</S.WhiteText>
          <S.Curve />
        </S.CurveWrapper>

        <S.SeniorWrapper>
          <S.SeniorTextWrapper>
            <div>
              <S.BlueText>선배들은</S.BlueText>
              <S.Text2>자신의 과제로 돈을 벌어요</S.Text2>
            </div>
            <S.Text3>그동안 만들었던 과제, 발표자료로<br/>커피 한 잔 값 벌어봐요!</S.Text3>
          </S.SeniorTextWrapper>
          
          <S.MfImg3 />
          <S.Ic1><S.Img src={clipBoardIcon} alt="clip" width={35} height={35} /></S.Ic1>
          <S.Ic2><S.Img src={clipBoardIcon} alt="clip" width={35} height={35} /></S.Ic2>
          <S.Ic3><S.Img src={clipBoardIcon} alt="clip" width={35} height={35} /></S.Ic3>
          <S.Ic4><S.Img src={clipBoardIcon} alt="clip" width={35} height={35} /></S.Ic4>
          <S.Ic5><S.Img src={clipBoardIcon} alt="clip" width={35} height={35} /></S.Ic5>
          <S.Ic6><S.Img src={dollarIcon} alt="dollar" width={35} height={35} /></S.Ic6>
        </S.SeniorWrapper>

        <S.JuniorWrapper>
          <S.JuniorTextWrapper>
            <div>
              <S.OrangeText>후배들은</S.OrangeText>
              <S.Text2>자료를 살 수 있어요</S.Text2>
            </div>
            <S.Text3>비결이 녹아든 자료를 공유받고<br/>소중한 내 시간과 학점을 지켜요!</S.Text3>
          </S.JuniorTextWrapper>
          
          <S.MfImg4 />
          <S.JuniorDescWrapper>
            <div>
              <S.IconWrapper2><S.Img src={clipBoardIcon} alt="clip" width={35} height={35} /></S.IconWrapper2>
              <S.Text4>합리적으로 살 수 있는<br/>검증된 선배의 자료</S.Text4>
            </div>
            <div>
              <S.IconWrapper2><S.Img src={calendarIcon} alt="calendar" width={35} height={35} /></S.IconWrapper2>
              <S.Text4>시간이 돈이다!<br/>눈에 띄게 빨라진 작업</S.Text4>
            </div>
            <div>
              <S.IconWrapper2><S.Img src={pencilIcon} alt="pencil" width={35} height={35} /></S.IconWrapper2>          
              <S.Text4>퀄리티가 한층 더<br/>높아지는 나의 과제물</S.Text4>  
            </div>
          </S.JuniorDescWrapper>
        </S.JuniorWrapper>

        <S.RoleWrapper>
          <S.WhoAreYouText>
            <S.Text2>여러분은<br/>어떤 사람인가요?</S.Text2>
            <S.Text3>시간과 학점을 지키고 싶으신 분은<br/>꼭 설문에 참여해주세요!</S.Text3>
          </S.WhoAreYouText>
          <S.MfIconWrapper>
            <div>
              <S.MfCircleIcon1 />
              <S.JuniorName >후배</S.JuniorName>
            </div>
            <S.DotLine />
            <div>
              <S.MfCircleIcon2 />
              <S.SeniorName >선배</S.SeniorName>
            </div>
          </S.MfIconWrapper>

          <S.RoleDescWrapper >
            <S.RoleDesc>
              <S.P>과제 말고도 할게 많은</S.P>
              <S.P>멀티 태스커</S.P>
            </S.RoleDesc>
            <S.RoleDesc>
              <S.P>이 수업은 내가 잘 알지</S.P>
              <S.P>교수님 취향 저격수</S.P>
            </S.RoleDesc>
          </S.RoleDescWrapper>

          <S.MfIconWrapper>
            <div>
              <S.MfCircleIcon3 />
              <S.JuniorName>후배</S.JuniorName>
            </div>
            <S.DotLine />
            <div>
              <S.MfCircleIcon4 />
              <S.SeniorName >선배</S.SeniorName>
            </div>
          </S.MfIconWrapper>

          <S.RoleDescWrapper >
            <S.RoleDesc>
              <S.P>이 수업 A+받아야하는</S.P>
              <S.P>학점 사냥꾼</S.P>
            </S.RoleDesc>
            <S.RoleDesc>
              <S.P>잘 만든 내 발표자료가 있는</S.P>
              <S.P>손재주 장인</S.P>
            </S.RoleDesc>
          </S.RoleDescWrapper>
        </S.RoleWrapper>

        <S.SurveyWrapper>
          <S.SurveyTitle>지금 바로 설문에 참여하여<br/>기프티콘 이벤트에 응모하세요!</S.SurveyTitle>
          <S.SurveyContext>
            <S.P>* Majorfolio는 사용자 동의 없이 반복적인 알림을 보내지 않습니다.</S.P>
            <S.P>* 입력하신 개인정보는 서비스 개선 및 이용 안내 목적 이외에는<br/>사용하지 않고, 설문 종료 후 3개월 내로 폐기합니다.</S.P>
          </S.SurveyContext>
        </S.SurveyWrapper>
        
      </S.Container>
    </>
  )
}

export default Landing