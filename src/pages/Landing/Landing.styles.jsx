import styled from "styled-components";
import { Mf1, Mf2, Mf3, Mf4, LandingLogo, LandingCurve, MfIcon1, MfIcon2, MfIcon3, MfIcon4, DottedLine, RightChevron } from '../../assets/images/landing';

export const Container = styled.div`
  width: 360px;
  padding: 0 80px;
  @media screen and (max-width: 767px) {
    width: 100vw;
    padding: 0;
  }
`;

// 텍스트 설정
export const P = styled.p`
  margin: 0;
`;

export const Text1 = styled.p`
  margin: 0;
  color: black;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.40px;
  word-wrap: break-word;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 4.4vw;
    line-height: 7.1vw;
  }
`;

export const Text2 = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 25.6px;
  word-wrap: break-word;

  @media screen and (max-width: 767px) {
    font-size: 4.4vw;
    line-height: 7.1vw;
  }
`;

export const Text3 = styled.p` 
  margin: 0;
  color: #1F2026;
  font-size: 12px;
  font-weight: 500;
  line-height: 19.2px;
  word-wrap: break-word;

  @media screen and (max-width: 767px) {
    font-size: 3.33vw;
    line-height: 5.33vw;
  }
`;

export const Text4 = styled.p`
  margin: 6px 0 0 0;
  color: #1F2026;
  font-size: 8px;
  font-weight: 500;
  line-height: 12.8px;
  word-wrap: break-word;
  text-align: center;

  @media screen and (max-width: 767px) {
    margin: 1.67vw 0 0 0;
    font-size: 2.22vw;
    line-height: 3.56vw;
  }
`;

export const CenterAlign = styled(Text2)`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media screen and (max-width: 767px) {
    width: 100vw;
  }
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
  gap: 135.5px;
  justify-content: center;

  @media screen and (max-width: 767px) {
    gap: 37.5vw;
  }
`;

export const MfImg1 = styled(Mf1)`
  width: 86.5px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 24vw;
  }
`;

export const MfImg2 = styled(Mf2)`
  width: 72.7px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 20vw;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin: 23.04px 0 36px 0;
  justify-content: center;  

  @media screen and (max-width: 767px) {
    margin: 5.5vw 0 8.3vw 0;
  }
`;

export const Logo = styled(LandingLogo)`
  width: 154px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 42.7vw;
  }
`;

export const BtnCheck = styled.div`
  padding: 14px 0;
  margin: 185.5px 20px 0 20px;
  background: #4340DB;
  border-radius: 6px;
  color: white;
  display: flex;
  justify-content: center;
  gap: 4px;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    padding: 3.89vw 0;
    margin: 51.53vw 5.55vw 0 5.55vw;
    border-radius: 1.67vw;
    gap: 1.11vw;
  }
`;

export const WhiteRightChevron = styled(RightChevron)`
  width: 24px;
  height: auto;
  & .custom-path {
    fill: white;
  }

  @media screen and (max-width: 767px) {
    width: 6.67vw;
  }
`;

export const ChevronWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;

  @media screen and (max-width: 767px) {
    
  }
`;

export const GrayDownChevron = styled(RightChevron)`
  width: 24px;
  height: auto;
  transform: rotate(90deg);
  & .custom-path {
    fill: #A3ABB3;
  }

  @media screen and (max-width: 767px) {
    
  }
`;

// 말풍선 화면 (선배들의 과제나 자료 ...)
export const SpeechBubbleWrapper = styled.div`
  margin-top: 51px;
  margin-bottom: 35px;  
  position: relative;

  @media screen and (max-width: 767px) {
    margin-top: 14.17vw;
    margin-bottom: 9.7vw;  
  }
`;

export const SpeechBubble = styled.span`
  display: inline-block;
  height: 16px;
  padding: 8px 16px;
  background: #4340DB; 
  border-radius: 8px; 
  overflow: hidden;
  text-align: center; 
  color: white; 
  font-size: 10px; 
  font-weight: 500; 
  line-height: 16px; 
  word-wrap: break-word;

  @media screen and (max-width: 767px) {
    height: 4.4vw;
    padding: 2.2vw 4.4vw;
    border-radius: 2.2vw; 
    font-size: 2.8vw; 
    line-height: 4.4vw; 
  }
`;

export const Opacity = styled(SpeechBubble)`
  opacity: 0.20;
`;

export const B1 = styled(SpeechBubble)`
  margin-left: 162px;

  @media screen and (max-width: 767px) {
    margin-left: 45vw;
  }
`;

export const B2 = styled(Opacity)`
  margin-top: -8px;
  margin-left: 48px;

  @media screen and (max-width: 767px) {
    margin-top: -2.2vw;
    margin-left: 13.4vw;
  }
`;

export const B3 = styled(Opacity)`
  margin-top: 7px;
  margin-left: 229px;

  @media screen and (max-width: 767px) {
    margin-top: 1.9vw;
    margin-left: 63.6vw;
  }
`;

export const B4 = styled(Opacity)`
  margin-top: 19.8px;
  margin-left: 55.8px;

  @media screen and (max-width: 767px) {
    margin-top: 5.5vw;
    margin-left: 15.5vw;
  }
`;

export const B5 = styled(Opacity)`
  margin-top: 6.84px;
  margin-left: 180.97px;
  
  @media screen and (max-width: 767px) {
    margin-top: 1.9vw;
    margin-left: 50.27vw;
  }
`;

export const B6 = styled(SpeechBubble)`
  margin-top: -8px;
  margin-left: 31.96px;

  @media screen and (max-width: 767px) {
    margin-top: -2.2vw;
    margin-left: 8.88vw;
  }
`;

// 곡선 배너 (선배들의 자료들을 커피 한 잔 ...)
export const CurveWrapper = styled.div`
  width: 100%;
  height: 108.61px;
  position: relative;
  background: #4340DB;

  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 30.17vw;
  }
`;

export const Curve = styled(LandingCurve)`
  width: 347px;
  height: auto;
  margin-left: 13.2px;

  @media screen and (max-width: 767px) {
    width: 96.39vw;
    margin-left: 3.62vw;
  }
`;

// 선배 화면 (선배들은 ...)
export const SeniorWrapper = styled.div`
  position: relative;
  height: 300px;

  @media screen and (max-width: 767px) {
    height: 83.33vw;
  }
`;

export const SeniorTextWrapper = styled.div`
  width: 180px;
  padding-top: 32px;  
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 767px) {
    width: 50vw;
    padding-top: 8.88vw;  
    padding-left: 8.88vw;
    gap: 2.22vw;
  }
`;

export const MfImg3 = styled(Mf3)`
  width: 65px;
  height: auto;
  position: absolute;
  top: 0;
  right: 26px;

  @media screen and (max-width: 767px) {
    width: 18.06vw;
    right: 7.22vw;
  }
`;

export const IconWrapper = styled.span`
  width: 60px;
  height: 60px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F4F7FA;
  border-radius: 36px;

  @media screen and (max-width: 767px) {
    width: 16.67vw;
    height: 16.67vw;
    border-radius: 10vw;
  }
`;

export const Ic1 = styled(IconWrapper)`
  top: 188px;
  left: 3.16px;
  transform: rotate(13.45deg);

  @media screen and (max-width: 767px) {
    top: 52.27vw;
    left: 0.88vw;
  }
`;

export const Ic2 = styled(IconWrapper)`
  top: 203.8px;
  left: 66.38px;
  transform: rotate(47.45deg);

  @media screen and (max-width: 767px) {
    top: 56.61vw;
    left: 18.44vw;
  }
`;

export const Ic3 = styled(IconWrapper)`
  top: 236px;
  left: -23px;
  transform: rotate(-12.85deg);

  @media screen and (max-width: 767px) {
    top: 65.71vw;
    left: -6.41vw;
  }
`;

export const Ic4 = styled(IconWrapper)`
  top: 236px;
  left: 32px;
  transform: rotate(-40.14deg);

  @media screen and (max-width: 767px) {
    top: 65.71vw;
    left: 8.89vw;
  }
`;

export const Ic5 = styled(IconWrapper)`
  top: 236px;
  left: 101px;
  transform: rotate(128.92deg);

  @media screen and (max-width: 767px) {
    top: 65.71vw;
    left: 28.10vw;
  }
`;

export const Ic6 = styled(IconWrapper)`
  top: 236px;
  left: 200px;

  @media screen and (max-width: 767px) {
    top: 65.71vw;
    left: 55.56vw;
  }
`;

export const Img = styled.img`
  width: 35px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 9.72vw;
  }
`;

/* 후배 화면 (후배들은 ...) */
export const JuniorWrapper = styled.div`
  position: relative;
  background: #F4F7FA;
  height: 300px;

  @media screen and (max-width: 767px) {
    height: 83.33vw;
  }
`;

export const JuniorTextWrapper = styled.div`
  padding-top: 32px;  
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: right;

  @media screen and (max-width: 767px) {
    padding-top: 8.88vw;  
    padding-right: 8.88vw;
    gap: 2.22vw;
  }
`;

export const MfImg4 = styled(Mf4)`
  width: 69.19px;
  height: auto;
  position: absolute;
  top: 50px;
  left: 46px;

  @media screen and (max-width: 767px) {
    width: 19.22vw;
    top: 13.89vw;
    left: 12.78vw;
  }
`;

export const IconWrapper2 = styled.span`
  width: 60px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5ECF4;
  border-radius: 36px;

  @media screen and (max-width: 767px) {
    width: 16.67vw;
    height: 16.67vw;
    border-radius: 10vw;
  }
`;

export const JuniorDescWrapper = styled.div`
  width: 100%;
  margin-top: 42px;
  display: flex;
  justify-content: center;
  gap: 32px;

  @media screen and (max-width: 767px) {
    width: 100vw;
    margin-top: 11.67vw;
    gap: 8.89vw;
  }
`;

/* 사용자 유형 화면 (여러분은 어떤 사람인가요?) */
export const RoleWrapper = styled.div`
  height: 482px;

  @media screen and (max-width: 767px) {
    height: 134vw;
  }
`;

export const WhoAreYouText = styled.div`
  width: 100%;
  padding: 40px 0 42.84px 0;
  display: flex;
  gap: 8px;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 767px) {
    width: 100vw;
    padding: 11.11vw 0 11.9vw 0;
    gap: 2.22vw;
  }
`;

export const MfIconWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 2.22vw;
    gap: 11.11vw;
  }
`;

export const MfCircleIcon1 = styled(MfIcon1)`
  width: 60px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 16.17vw;
  }
`;

export const MfCircleIcon2 = styled(MfIcon2)`
  width: 60px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 16.17vw;
  }
`;

export const MfCircleIcon3 = styled(MfIcon3)`
  width: 60px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 16.17vw;
  }
`;

export const MfCircleIcon4 = styled(MfIcon4)`
  width: 60px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 16.17vw;
  }
`;

export const DotLine = styled(DottedLine)`
  width: 40px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 11.11vw;
  }
`;

export const JuniorName = styled.div`
  width: 14px;
  height: 12px;
  margin: -8px auto 0 auto;
  padding: 2px 6px;
  background: #FF7A00;
  border-radius: 8px;
  overflow: hidden;
  color: white;
  text-align: center;
  font-size: 8px;
  font-weight: 700;
  line-height: 12.8px;
  word-wrap: break-word;

  @media screen and (max-width: 767px) {
    width: 3.89vw;
    height: 3.33vw;
    margin: -2.22vw auto 0 auto;
    padding: 0.56vw 1.67vw;
    border-radius: 2.22vw;
    font-size: 2.22vw;
    line-height: 3.56vw;
  }
`;

export const SeniorName = styled.div`
  width: 14px;
  height: 12px;
  margin: -8px auto 0 auto;
  padding: 2px 6px;
  background: #4340DB;
  border-radius: 8px;
  overflow: hidden;
  color: white;
  text-align: center;
  font-size: 8px;
  font-weight: 700;
  line-height: 12.8px;
  word-wrap: break-word;

  @media screen and (max-width: 767px) {
    width: 3.89vw;
    height: 3.33vw;
    margin: -2.22vw auto 0 auto;
    padding: 0.56vw 1.67vw;
    border-radius: 2.22vw;
    font-size: 2.22vw;
    line-height: 3.56vw;
  }
`;

export const RoleDescWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    margin-bottom: 5.56vw;
  }
`;

export const RoleDesc = styled.div`
  width: 84px;
  height: 22px;
  padding: 8px 16px;
  background: #F0F4F8;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  color: #4B535A; 
  font-size: 8px; 
  font-weight: 500; 
  line-height: 11.2px; 
  word-wrap: break-word;

  @media screen and (max-width: 767px) {
    width: 23.33vw;
    height: 6.11vw;
    padding: 2.22vw 4.44vw;
    border-radius: 2.22vw;
    font-size: 2.22vw; 
    line-height: 3.11vw; 
  }
`;

// 핸드폰 미리보기 화면
export const PhoneWrapper = styled.div`
  margin: 33px 0;
  display: flex;
  gap: 14px;
  justify-content: center;

  @media screen and (max-width: 767px) {
    margin: 9.17vw 0;
    gap: 3.83vw;
  }
`;

export const Phone = styled.img`
  width: 89.2px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 24.78vw;
  }
`;

// 검정 배경
export const BlackBack = styled.div`
  width: 100%;
  background: #1F2026;
  padding-bottom: 44px;

  @media screen and (max-width: 767px) {
    width: 100vw;
    padding-bottom: 12.22vw;
  }
`;

// 혜택 화면
export const BenefitWrapper = styled.div`
  padding-top: 48.5px;

  @media screen and (max-width: 767px) {
    padding-top: 13.47vw;
  }
`;

export const BenefitTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;

  @media screen and (max-width: 767px) {
    width: 100vw;
    gap: 2.22vw;
  }
`;

export const Benefits = styled.div`
  padding: 27.5px 32px 0 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: 767px) {
    padding: 7.64vw 9.72vw 0 9.72vw;
    gap: 3.33vw;
  }
`;

export const Benefit = styled.div`
  padding: 18px 0;
  display: flex;
  flex-direction: row;
  gap: 48px;
  justify-content: center;
  background: white;
  border-radius: 8px;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding: 5vw 0;
    gap: 13.33vw;
    border-radius: 2.22vw;
  }
`;

export const BenefitImg = styled.img`
  width: 44px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 12.22vw;
  }
`;

export const BenefitContextTitle = styled(P)`
  color: #1F2026;
  font-size: 12px;
  font-weight: 700;
  line-height: 19.20px;
  word-wrap: break-word;
  display: inline;
  margin-right: 3px;

  @media screen and (max-width: 767px) {
    font-size: 3.33vw;
    line-height: 5.33vw;
    margin-right: 0.83vw;
  }
`;

export const BenefitContextTitleBlue = styled(BenefitContextTitle)`
  color: #5166CB;
`;

export const BenefitContext = styled(Text4)`
  text-align: left;
`;

// 설문참여 화면 (지금 바로 설문에 참여하여 ...)
export const SurveyWrapper = styled.div`
  width: 100%;
  height: 183px;
  padding: auto 0;
  display: flex;
  gap: 24px;
  flex-direction: column;  
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 50.83vw;
    gap: 6.67vw;
  }
`;

export const SurveyTitle = styled(P)`
  color: #FFA722;
  font-size: 16px;
  font-weight: 700;
  line-height: 22.4px;
  word-wrap: break-word;
  display: inline;

  @media screen and (max-width: 767px) {
    font-size: 4.44vw;
    line-height: 6.22vw;
  }
`;

export const WhiteSurveyTitle = styled(SurveyTitle)`
  color: white;
  display: inline;
`;

export const SurveyContext = styled.div`
  color: #F0F4F8;
  font-size: 8px;
  font-weight: 500;
  line-height: 12.8px;
  word-wrap: break-word;
  display: flex;
  gap: 4px;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    font-size: 2.22vw;
    line-height: 3.56vw;
    gap: 1.11vw;
  }
`;

export const BtnSurvey = styled(BtnCheck)`
  margin-top: 0;
  background: #FFA722;
`;

export const BtnSurveyText = styled(Text2)`
  color: #232629;
`;

export const BlackRightChevron = styled(RightChevron)`
  width: 24px;
  height: auto;
  & .custom-path {
    fill: #232629;
  }

  @media screen and (max-width: 767px) {
    width: 6.67vw;
  }
`;