import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadDefaultStep from './UploadDefaultStep';
import UploadInProgresStep from './UploadInProgressStep';
import UploadGuidelineStep from './UploadGuidelineStep';
import UploadCautionStep from './UploadCautionStep';
import { SecondaryTopbar } from '../../components/common/TopBar';
import { CancelDefaultIcon, CloseDefaultIcon } from '../../assets/icons';
import Text from '../../components/common/Text';

export default function Upload() {
  const navigate = useNavigate();

  const [step, setStep] = useState<
    'default' | 'inProgress' | 'guideline' | 'caution'
  >('default');
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
      {step === 'default' && (
        <UploadDefaultStep onNext={() => setStep('inProgress')} />
      )}
      {step === 'inProgress' && (
        <UploadInProgresStep onNext={() => setStep('guideline')} />
      )}
      {step === 'guideline' && (
        <UploadGuidelineStep onNext={() => setStep('caution')} />
      )}
      {step === 'caution' && (
        <UploadCautionStep onNext={() => navigate('/', { replace: true })} />
      )}
    </>
  );
}
