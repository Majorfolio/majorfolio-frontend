import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadDefaultStep from './UploadDefaultStep';
import UploadInProgresStep from './UploadInProgressStep';
import UploadGuidelineStep from './UploadGuidelineStep';
import UploadCautionStep from './UploadCautionStep';

export default function Upload() {
  const navigate = useNavigate();

  const [step, setStep] = useState<
    'default' | 'inProgress' | 'guideline' | 'caution'
  >('default');
  return (
    <>
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
