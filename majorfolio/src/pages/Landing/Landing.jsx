import React from 'react';

import styles from "./Landing.module.css";

import { Mf1, Mf2, Mf3, Mf4, LandingLogo, LandingCurve, MfIcon1, MfIcon2, MfIcon3, MfIcon4, DottedLine } from '../../assets';
import dollarIcon from '../../assets/landing-dollar.png';
import clipBoardIcon from '../../assets/landing-clipboard.png';
import calendarIcon from '../../assets/landing-calendar.png';
import pencilIcon from '../../assets/landing-pencil.png';

const Landing = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mfWrapper} >
          <Mf1 className={styles.mf1} />
          <Mf2 className={styles.mf2} />
        </div>

        <div className={styles.logoWrapper}>
          <LandingLogo className={styles.logo} />
        </div>

        <p className={styles.text1} >지난 학기 잘 만든 과제를 볼 수 있다는<br/>사실을 알고 계셨나요?</p>
        <div className={styles.speechBubbleWrapper}>
          <p className={`${styles.text2} ${styles.centerAlign}`} >선배들의 과제나 자료,<br/>보고 싶지 않으신가요?</p>
          <span className={`${styles.speechBubble} ${styles.b1}`}>
            선배한테 직접 물어보기는 무서워..
          </span>
          <span className={`${styles.speechBubble} ${styles.opacity} ${styles.b2}`}>
            잘하고 싶은데 방법을 모르겠어 ㅠㅠ
          </span>
          <span className={`${styles.speechBubble} ${styles.opacity} ${styles.b3}`}>
            어떡하지
          </span>
          <span className={`${styles.speechBubble} ${styles.opacity} ${styles.b4}`}>
            어려워..
          </span>
          <span className={`${styles.speechBubble} ${styles.opacity} ${styles.b5}`}>
            이 툴은 어떻게 쓰는거지?
          </span>
          <span className={`${styles.speechBubble} ${styles.b6}`}>
            작년 이 수업에서 A+ 받은 과제가 뭘까?
          </span>
        </div>

        <div className={styles.curveWrapper} >
          <p className={`${styles.text2} ${styles.whiteText} ${styles.centerAlign}`} >선배들의 자료들을 커피 한 잔 값으로<br/>사고 성장할 수 있습니다!</p>
          <LandingCurve className={styles.curve} />
        </div>

        <div className={styles.seniorWrapper} >
          <div className={styles.seniorTextWrapper} >
            <div>
              <p className={`${styles.text2} ${styles.blueText}`} >선배들은</p>
              <p className={styles.text2} >자신의 과제로 돈을 벌어요</p>
            </div>
            <p className={styles.text3} >그동안 만들었던 과제, 발표자료로<br/>커피 한 잔 값 벌어봐요!</p>
          </div>
          
          <Mf3 className={styles.mf3} />
          <span className={`${styles.iconWrapper} ${styles.ic1}`} ><img src={clipBoardIcon} alt="clip" width={35} height={35} /></span>
          <span className={`${styles.iconWrapper} ${styles.ic2}`} ><img src={clipBoardIcon} alt="clip" width={35} height={35} /></span>
          <span className={`${styles.iconWrapper} ${styles.ic3}`} ><img src={clipBoardIcon} alt="clip" width={35} height={35} /></span>
          <span className={`${styles.iconWrapper} ${styles.ic4}`} ><img src={clipBoardIcon} alt="clip" width={35} height={35} /></span>
          <span className={`${styles.iconWrapper} ${styles.ic5}`} ><img src={clipBoardIcon} alt="clip" width={35} height={35} /></span>
          <span className={`${styles.iconWrapper} ${styles.ic6}`} ><img src={dollarIcon} alt="dollar" width={35} height={35} /></span>
        </div>

        <div className={styles.juniorWrapper} >
          <div className={styles.juniorTextWrapper}>
            <div>
              <p className={`${styles.text2} ${styles.orangeText}`} >후배들은</p>
              <p className={styles.text2} >자료를 살 수 있어요</p>
            </div>
            <p className={styles.text3} >비결이 녹아든 자료를 공유받고<br/>소중한 내 시간과 학점을 지켜요!</p>
          </div>
          
          <Mf4 className={styles.mf4} />
          <div className={styles.juniorDescWrapper} >
            <div>
              <span className={styles.iconWrapper2} ><img src={clipBoardIcon} alt="clip" width={35} height={35} /></span>
              <p className={styles.text4} >적은 돈으로 살 수 있는<br/>검증된 선배의 자료</p>
            </div>
            <div>
              <span className={styles.iconWrapper2} ><img src={calendarIcon} alt="calendar" width={35} height={35} /></span>
              <p className={styles.text4} >시간이 돈이다!<br/>눈에 띄게 빨라진 작업</p>
            </div>
            <div>
              <span className={styles.iconWrapper2} ><img src={pencilIcon} alt="pencil" width={35} height={35} /></span>          
              <p className={styles.text4} >퀄리티가 한층 더<br/>높아지는 나의 과제물</p>  
            </div>
          </div>
        </div>

        <div className={styles.roleWrapper} >
          <div className={styles.whoAreYouText} >
            <p className={styles.text2} >여러분은<br/>어떤 사람인가요?</p>
            <p className={styles.text3} >시간과 학점을 지키고 싶으신 분은<br/>꼭 설문에 참여해주세요!</p>
          </div>
          <div className={styles.mfIconWrapper} >
            <div>
              <MfIcon1 className={styles.mfIcon} />
              <div className={styles.juniorName} >후배</div>
            </div>
            <DottedLine className={styles.dottedLine} />
            <div>
              <MfIcon2 className={styles.mfIcon} />
              <div className={styles.seniorName} >선배</div>
            </div>
          </div>

          <div className={styles.roleDescWrapper} >
            <div className={styles.roleDesc} >
              <p>과제 말고도 할게 많은</p>
              <p>멀티 태스커</p>
            </div>
            <div className={styles.roleDesc} >
              <p>이 수업은 내가 잘 알지</p>
              <p>교수님 취향 저격수</p>
            </div>
          </div>

          <div className={styles.mfIconWrapper} >
            <div>
              <MfIcon3 className={styles.mfIcon} />
              <div className={styles.juniorName} >후배</div>
            </div>
            <DottedLine className={styles.dottedLine} />
            <div>
              <MfIcon4 className={styles.mfIcon} />
              <div className={styles.seniorName} >선배</div>
            </div>
          </div>

          <div className={styles.roleDescWrapper} >
            <div className={styles.roleDesc} >
              <p>이 수업 A+받아야하는</p>
              <p>학점 사냥꾼</p>
            </div>
            <div className={styles.roleDesc} >
              <p>잘 만든 내 발표자료가 있는</p>
              <p>손재주 장인</p>
            </div>
          </div>
        </div>

        <div className={styles.surveyWrapper}>
          <p className={styles.surveyTitle} >지금 바로 설문에 참여하여<br/>기프티콘 이벤트에 응모하세요!</p>
          <div className={styles.surveyContext}>
            <p>* Majorfolio는 사용자 동의 없이 반복적인 알림을 보내지 않습니다.</p>
            <p>* 입력하신 개인정보는 서비스 개선 및 이용 안내 목적 이외에는<br/>사용하지 않고, 설문 종료 후 3개월 내로 폐기합니다.</p>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Landing