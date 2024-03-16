import React, { ReactNode } from 'react';
import UploadSection from '../../../components/common/UploadSection';
import Text from '../../../components/common/Text';
import StyledCondition, {
  StyledImage,
  StyledImageContainer,
  StyledImageRow,
} from './index.styles';
import CopyRightImage from '../../../assets/images/landing/korea_copyright_commission.png';
import PoliceImage from '../../../assets/images/landing/경찰청.png';

interface CautionTextType {
  children: ReactNode;
}

function CautionText({ children }: CautionTextType) {
  return (
    <Text color="gray/gray900" size={14} lineHeight="lg">
      {children}
    </Text>
  );
}

interface UploadCautionStepType {
  onNext: () => void;
}

export default function UploadCautionStep() {
  const copyrightText = (
    <CautionText>
      자료의 정보 및 내용의 진실성에 대하여 메이저폴리오는 보증하지 않으며, 해당
      정보 및 게시물 저작권과 기타 법적 책임은 자료 등록자에게 있습니다. 자료 및
      게시물 내용의 불법적 이용, 무단 전재∙배포는 금지되어 있습니다. 저작권침해,
      명예훼손 등 분쟁 요소 발견 시{' '}
      <Text color="gray/gray900" size={14} lineHeight="lg" weight="bold">
        <a
          href="http://www.copyright.or.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          한국저작권위원회
        </a>
      </Text>
      와{' '}
      <Text color="gray/gray900" size={14} lineHeight="lg" weight="bold">
        <a
          href="https://www.police.go.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          사이버경찰청
        </a>
      </Text>
      을 이용해 주시기 바랍니다.
    </CautionText>
  );

  // TODO add images
  const organizationImages = (
    <StyledImageRow>
      <StyledImageContainer>
        <StyledImage src={CopyRightImage} alt="한국저작권위원회" />
      </StyledImageContainer>
      <StyledImageContainer>
        <StyledImage src={PoliceImage} alt="경찰청" />
      </StyledImageContainer>
    </StyledImageRow>
  );

  const refundPolicyIntroduction = (
    <CautionText>
      메이저폴리오는 구매자와 판매자 모두가 만족하는 서비스가 되도록 노력하고
      있으며, 아래의 4가지 자료환불 조건을 꼭 확인해주시기 바랍니다.
    </CautionText>
  );
  const fileError = (
    <CautionText>
      파일오류: 파일의 다운로드가 제대로 되지 않거나 파일형식에 맞는
      프로그램으로 정상 작동하지 않는 경우
    </CautionText>
  );
  const copiedContent = (
    <CautionText>
      모방자료: 다른 자료와 70% 이상 내용이 일치하는 경우 (중복임을 확인할 수
      있는 근거 필요함)
    </CautionText>
  );
  const contentWithoutClaim = (
    <CautionText>
      저작권 없음: 인터넷의 다른 사이트, 연구기관, 학교, 서적 등의 자료를 도용한
      경우
    </CautionText>
  );
  const inconsistency = (
    <CautionText>
      설명과 실제 내용 불일치: 자료의 설명과 실제 자료의 내용이 일치하지 않는
      경우
    </CautionText>
  );
  const conclusion = (
    <CautionText>
      메이저폴리오는 통신판매중개자로서 거래 당사자가 아니며, 상품 정보 및
      거래에 대해 책임을 지지 않습니다.;
    </CautionText>
  );

  const refundCoditions = (
    <ul>
      <StyledCondition>{fileError}</StyledCondition>
      <StyledCondition>{copiedContent}</StyledCondition>
      <StyledCondition>{contentWithoutClaim}</StyledCondition>
      <StyledCondition>{inconsistency}</StyledCondition>
    </ul>
  );

  return (
    <>
      <UploadSection
        title={
          <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
            저작권
          </Text>
        }
        items={[copyrightText, organizationImages]}
      />
      <UploadSection
        title={
          <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
            환불정책
          </Text>
        }
        items={[refundPolicyIntroduction, refundCoditions, conclusion]}
      />
    </>
  );
}
