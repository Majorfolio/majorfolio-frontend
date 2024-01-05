import styled from "styled-components";
import { Mf1, Mf2, Mf3, Mf4, LandingLogo, LandingCurve, MfIcon1, MfIcon2, MfIcon3, MfIcon4, DottedLine, RightChevron } from '../../assets';

export const Container = styled.div`
  width: 100vw;
`;

// 텍스트 설정
export const P = styled.p`
  margin: 0;
`;

export const Text1 = styled.p`
  margin: 0;
  color: black;
  font-size: 4.4vw;
  font-weight: 500;
  line-height: 7.1vw;
  word-wrap: break-word;
  text-align: center;
`;

export const Text2 = styled.p`
  margin: 0;
  font-size: 4.4vw;
  font-weight: 700;
  line-height: 7.1vw;
  word-wrap: break-word;
`;

export const Text3 = styled.p` 
  margin: 0;
  color: #1F2026;
  font-size: 3.33vw;
  font-weight: 500;
  line-height: 5.33vw;
  word-wrap: break-word;
`;

export const Text4 = styled.p`
  margin: 1.67vw 0 0 0;
  color: #1F2026;
  font-size: 2.22vw;
  font-weight: 500;
  line-height: 3.56vw;
  word-wrap: break-word;
  text-align: center;
`;

export const CenterAlign = styled(Text2)`
  position: absolute;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const WhiteText = styled(CenterAlign)`
  color: white;
`;

export const BlueText = styled(Text2)`
  color: #4340DB;
`;

export const OrangeText = styled(Text2)`
  color: #FFA722;
`;

// 메인 화면
export const MfWrapper = styled.div`
  display: flex;
  gap: 37.5vw;
  justify-content: center;
`;

export const MfImg1 = styled(Mf1)`
  width: 24vw;
  height: auto;
`;

export const MfImg2 = styled(Mf2)`
  width: 20vw;
  height: auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin: 5.5vw 0 8.3vw 0;
  justify-content: center;  
`;

export const Logo = styled(LandingLogo)`
  width: 42.7vw;
  height: auto;
`;

export const BtnCheck = styled.div`
  padding: 3.89vw 0;
  margin: 51.53vw 5.55vw 0 5.55vw;
  background: #4340DB;
  border-radius: 1.67vw;
  color: white;
  display: flex;
  justify-content: center;
  gap: 1.11vw;
  &:hover {
    cursor: pointer;
  }
`;

export const WhiteRightChevron = styled(RightChevron)`
  width: 6.67vw;
  height: auto;
  & .custom-path {
    fill: white;
  }
`;

export const ChevronWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.22vw;
`;

export const GrayDownChevron = styled(RightChevron)`
  width: 6.67vw;
  height: auto;
  transform: rotate(90deg);
  & .custom-path {
    fill: #A3ABB3;
  }
`;

// 말풍선 화면 (선배들의 과제나 자료 ...)
export const SpeechBubbleWrapper = styled.div`
  margin-top: 14.17vw;
  margin-bottom: 9.7vw;  
  position: relative;
`;

export const SpeechBubble = styled.span`
  display:inline-block;
  height: 4.4vw;
  padding: 2.2vw 4.4vw;
  background: #4340DB; 
  border-radius: 2.2vw; 
  overflow: hidden;
  text-align: center; 
  color: white; 
  font-size: 2.8vw; 
  font-weight: 500; 
  line-height: 4.4vw; 
  word-wrap: break-word;
`;

export const Opacity = styled(SpeechBubble)`
  opacity: 0.20;
`;

export const B1 = styled(SpeechBubble)`
  margin-left: 45vw;
`;

export const B2 = styled(Opacity)`
  margin-top: -2.2vw;
  margin-left: 13.3vw;
`;

export const B3 = styled(Opacity)`
  margin-top: 1.9vw;
  margin-left: 63.6vw;
`;

export const B4 = styled(Opacity)`
  margin-top: 5.5vw;
  margin-left: 15.5vw;
`;

export const B5 = styled(Opacity)`
  margin-top: 1.9vw;
  margin-left: 50.27vw;
`;

export const B6 = styled(SpeechBubble)`
  margin-top: -2.2vw;
  margin-left: 8.88vw;
`;

// 곡선 배너 (선배들의 자료들을 커피 한 잔 ...)
export const CurveWrapper = styled.div`
  width: 100vw;
  height: 30.17vw;
  position: relative;
  background: #4340DB;
`;

export const Curve = styled(LandingCurve)`
  width: 96.39vw;
  height: auto;
  margin-left: 3.62vw;
`;

// 선배 화면 (선배들은 ...)
export const SeniorWrapper = styled.div`
  position: relative;
  height: 83.33vw;
`;

export const SeniorTextWrapper = styled.div`
  width: 50vw;
  padding-top: 8.88vw;  
  padding-left: 8.88vw;
  display: flex;
  flex-direction: column;
  gap: 2.22vw;
`;

export const MfImg3 = styled(Mf3)`
  width: 18.06vw;
  height: auto;
  position: absolute;
  top: 0;
  right: 7.22vw;
`;

export const IconWrapper = styled.span`
  width: 16.67vw;
  height: 16.67vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F4F7FA;
  border-radius: 10vw;
`;

export const Ic1 = styled(IconWrapper)`
  top: 52.27vw;
  left: 0.88vw;
  transform: rotate(13.45deg);
`;

export const Ic2 = styled(IconWrapper)`
  top: 56.61vw;
  left: 18.44vw;
  transform: rotate(47.45deg);
`;

export const Ic3 = styled(IconWrapper)`
  top: 65.71vw;
  left: -6.41vw;
  transform: rotate(-12.85deg);
`;

export const Ic4 = styled(IconWrapper)`
  top: 65.71vw;
  left: 8.89vw;
  transform: rotate(-40.14deg);
`;

export const Ic5 = styled(IconWrapper)`
  top: 65.71vw;
  left: 28.10vw;
  transform: rotate(128.92deg);
`;

export const Ic6 = styled(IconWrapper)`
  top: 65.71vw;
  left: 55.56vw;
`;

export const Img = styled.img`
  width: 9.72vw;
  height: auto;
`;

/* 후배 화면 (후배들은 ...) */
export const JuniorWrapper = styled.div`
  position: relative;
  background: #F4F7FA;
  height: 83.33vw;
`;

export const JuniorTextWrapper = styled.div`
  padding-top: 8.88vw;  
  padding-right: 8.88vw;
  display: flex;
  flex-direction: column;
  gap: 2.22vw;
  text-align: right;
`;

export const MfImg4 = styled(Mf4)`
  width: 19.22vw;
  height: auto;
  position: absolute;
  top: 13.89vw;
  left: 12.78vw;
`;

export const IconWrapper2 = styled.span`
  width: 16.67vw;
  height: 16.67vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5ECF4;
  border-radius: 10vw;
`;

export const JuniorDescWrapper = styled.div`
  width: 100vw;
  margin-top: 11.67vw;
  display: flex;
  justify-content: center;
  gap: 8.89vw;
`;

/* 사용자 유형 화면 (여러분은 어떤 사람인가요?) */
export const RoleWrapper = styled.div`
  height: 134vw;
`;

export const WhoAreYouText = styled.div`
  width: 100vw;
  padding: 11.11vw 0 11.9vw 0;
  display: flex;
  gap: 2.22vw;
  flex-direction: column;
  text-align: center;
`;

export const MfIconWrapper = styled.div`
  margin-bottom: 2.22vw;
  display: flex;
  gap: 11.11vw;
  align-items: center;
  justify-content: center;
`;

export const MfCircleIcon1 = styled(MfIcon1)`
  width: 16.17vw;
  height: auto;
`;

export const MfCircleIcon2 = styled(MfIcon2)`
  width: 16.17vw;
  height: auto;
`;

export const MfCircleIcon3 = styled(MfIcon3)`
  width: 16.17vw;
  height: auto;
`;

export const MfCircleIcon4 = styled(MfIcon4)`
  width: 16.17vw;
  height: auto;
`;

export const DotLine = styled(DottedLine)`
  width: 11.11vw;
  height: auto;
`;

export const JuniorName = styled.div`
  width: 3.89vw;
  height: 3.33vw;
  margin: -2.22vw auto 0 auto;
  padding: 0.56vw 1.67vw;
  background: #FF7A00;
  border-radius: 2.22vw;
  overflow: hidden;
  color: white;
  text-align: center;
  font-size: 2.22vw;
  font-weight: 700;
  line-height: 3.56vw;
  word-wrap: break-word;
`;

export const SeniorName = styled.div`
  width: 3.89vw;
  height: 3.33vw;
  margin: -2.22vw auto 0 auto;
  padding: 0.56vw 1.67vw;
  background: #4340DB;
  border-radius: 2.22vw;
  overflow: hidden;
  color: white;
  text-align: center;
  font-size: 2.22vw;
  font-weight: 700;
  line-height: 3.56vw;
  word-wrap: break-word;
`;

export const RoleDescWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5.56vw;
`;

export const RoleDesc = styled.div`
  width: 23.33vw;
  height: 6.11vw;
  padding: 2.22vw 4.44vw;
  background: #F0F4F8;
  border-radius: 2.22vw;
  overflow: hidden;
  text-align: center;
  color: #4B535A; 
  font-size: 2.22vw; 
  font-weight: 500; 
  line-height: 3.11vw; 
  word-wrap: break-word;
`;

// 핸드폰 미리보기 화면
export const PhoneWrapper = styled.div`
  margin: 9.17vw 0;
  display: flex;
  gap: 3.83vw;
  justify-content: center;
`;

export const Phone = styled.img`
  width: 24.78vw;
  height: auto;
`;

// 검정 배경
export const BlackBack = styled.div`
  width: 100vw;
  background: #1F2026;
  padding-bottom: 12.22vw;
`;

// 혜택 화면
export const BenefitWrapper = styled.div`
  padding-top: 13.47vw;
`;

export const BenefitTitleWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 2.22vw;
`;

export const Benefits = styled.div`
  padding: 7.64vw 9.72vw 0 9.72vw;
  display: flex;
  flex-direction: column;
  gap: 3.33vw;
`;

export const Benefit = styled.div`
  padding: 5vw 0;
  display: flex;
  flex-direction: row;
  gap: 13.33vw;
  justify-content: center;
  background: white;
  border-radius: 2.22vw;
  align-items: center;
`;

export const BenefitImg = styled.img`
  width: 12.22vw;
  height: auto;
`;

export const BenefitContextTitle = styled(P)`
  color: #1F2026;
  font-size: 3.33vw;
  font-weight: 700;
  line-height: 5.33vw;
  word-wrap: break-word;
  display: inline;
  margin-right: 0.83vw;
`;

export const BenefitContextTitleBlue = styled(BenefitContextTitle)`
  color: #5166CB;
`;

export const BenefitContext = styled(Text4)`
  text-align: left;
`;

// 설문참여 화면 (지금 바로 설문에 참여하여 ...)
export const SurveyWrapper = styled.div`
  width: 100vw;
  height: 50.83vw;
  padding: auto 0;
  display: flex;
  gap: 6.67vw;
  flex-direction: column;  
  justify-content: center;
  text-align: center;
`;

export const SurveyTitle = styled(P)`
  color: #FFA722;
  font-size: 4.44vw;
  font-weight: 700;
  line-height: 6.22vw;
  word-wrap: break-word;
  display: inline;
`;

export const WhiteSurveyTitle = styled(SurveyTitle)`
  color: white;
  display: inline;
`;

export const SurveyContext = styled.div`
  color: #F0F4F8;
  font-size: 2.22vw;
  font-weight: 500;
  line-height: 3.56vw;
  word-wrap: break-word;
  display: flex;
  gap: 1.11vw;
  flex-direction: column;
`;

export const BtnSurvey = styled(BtnCheck)`
  padding: 3.89vw 19.72vw;
  margin-top: 0;
  background: #FFA722;
`;

export const BtnSurveyText = styled(Text2)`
  color: #232629;
`;

export const BlackRightChevron = styled(RightChevron)`
  width: 6.67vw;
  height: auto;
  & .custom-path {
    fill: #232629;
  }
`;