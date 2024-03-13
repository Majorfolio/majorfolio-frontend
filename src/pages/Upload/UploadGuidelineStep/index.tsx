import React from 'react';
import { Link } from 'react-router-dom';
import Description from '../../../components/common/Description';
import {
  CheckboxDefaultIcon,
  UploadCheckDefaultIcon,
} from '../../../assets/icons';
import Text from '../../../components/common/Text';
import {
  StyledBodyContainer,
  StyledContentSection,
  StyledIconTextRow,
  StyledUnderlinedText,
} from './index.styles';
import UploadSection from '../../../components/common/UploadSection';
import BottomButtonBar from '../../../components/common/BottomButtonBar';
import { useNextStep } from '..';
import useDraftStore from '../../../store/useDraftStore';
import useAuthStore from '../../../store/useAuthStore';
import useRefreshPayload from '../../../hooks/common/useRefreshPayload';
import sendFile from '../../../apis/assignment';
import useFormSubmission from '../../../hooks/common/useFormSubmission';
import StyledPageContainer from '../UploadDefaultStep/index.styles';

interface UploadGuidelineStepType {
  onNext: () => void;
}

export default function UploadGuidelineStep() {
  const { navigateToNextStep, navigateToHome } = useNextStep();
  const {
    file,
    title,
    major,
    semester,
    subjectName,
    professor,
    grade,
    fullScore,
    score,
    description,
    reset,
  } = useDraftStore();
  const accessToken = useAuthStore((state) => state.accessToken);
  const refreshPayload = useRefreshPayload();

  const pageDescription = (
    <Description
      normalText="업로드 하기 전,"
      boldText="가이드라인을 읽어보세요."
    />
  );

  const { isSubmitting, handleSubmit } = useFormSubmission(async () => {
    if (!file || !accessToken) return;
    const { code, result } = await sendFile(
      file,
      {
        title,
        major,
        semester,
        subjectName,
        professor,
        grade,
        fullScore: Number(fullScore),
        score: Number(score),
        description,
      },
      accessToken,
      refreshPayload,
    );
    reset();
    navigateToHome();
  });

  const checklist = (
    <ul>
      <StyledIconTextRow>
        <UploadCheckDefaultIcon />
        <Text color="gray/gray900" size={16} lineHeight="lg">
          반드시{' '}
          <Text color="gray/gray900" size={16} lineHeight="lg" weight="bold">
            권리 전부 를 소유
          </Text>
          한 파일만 업로드
        </Text>
      </StyledIconTextRow>
      <StyledIconTextRow>
        <UploadCheckDefaultIcon />
        <Text color="gray/gray900" size={16} lineHeight="lg">
          자료에{' '}
          <Text color="gray/gray900" size={16} lineHeight="lg" weight="bold">
            개인정보가 포함
          </Text>
          되지 않도록 주의
        </Text>
      </StyledIconTextRow>
      <StyledIconTextRow>
        <UploadCheckDefaultIcon />
        <Text color="gray/gray900" size={16} lineHeight="lg">
          자료함에서 언제든{' '}
          <Text color="gray/gray900" size={16} lineHeight="lg" weight="bold">
            판매 중지 가능
          </Text>
        </Text>
      </StyledIconTextRow>
    </ul>
  );

  const transitions = [
    {
      text: '확인 및 동의',
      onAction: handleSubmit,
      disabled: isSubmitting,
    },
  ];

  const notice = (
    <>
      <StyledContentSection>
        <Text color="gray/gray900" size={14}>
          파일 검토를 위해 평균 3 영업일이 소요될 수 있으니 이 점 양해
          부탁드립니다.
        </Text>
      </StyledContentSection>
      <StyledContentSection>
        <Text color="gray/gray900" size={14}>
          Majorfolio는 판매자와 구매자 모두가 만족하는 서비스가 되도록 노력하고
          있으며, 이용자 권리보호를 위해{' '}
          <Link to="../caution">
            <StyledUnderlinedText color="gray/gray900" size={14} weight="bold">
              주의 사항 및 자료환불 조건
            </StyledUnderlinedText>
          </Link>
          에 유의하여 주시길 바랍니다.
        </Text>
      </StyledContentSection>
    </>
  );

  return (
    <StyledPageContainer>
      {description}
      {checklist}
      <UploadSection items={[notice]} />

      <BottomButtonBar transitions={transitions} />
    </StyledPageContainer>
  );
}
