import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadDefaultStep from './UploadDefaultStep';
import UploadInProgresStep from './UploadInProgressStep';
import UploadGuidelineStep from './UploadGuidelineStep';
import UploadCautionStep from './UploadCautionStep';
import { SecondaryTopbar } from '../../components/common/TopBar';
import { CancelDefaultIcon, CloseDefaultIcon } from '../../assets/icons';
import Text from '../../components/common/Text';

enum Step {
  Default,
  InProgress,
  Guideline,
  Caution,
}

export default function Upload() {
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>(Step.Default);
  return (
    <>
      <SecondaryTopbar
        transition={
          <button type="button" onClick={() => navigate('/')}>
            <CloseDefaultIcon />
          </button>
        }
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            업로드
          </Text>
        }
        icons={[]}
      />
      {step === Step.Default && (
        <UploadDefaultStep onNext={() => setStep(Step.InProgress)} />
      )}
      {step === Step.InProgress && (
        <UploadInProgresStep onNext={() => setStep(Step.Guideline)} />
      )}
      {step === Step.Guideline && (
        <UploadGuidelineStep onNext={() => setStep(Step.Caution)} />
      )}
      {step === Step.Caution && (
        <UploadCautionStep onNext={() => navigate('/', { replace: true })} />
      )}
    </>
  );
}
