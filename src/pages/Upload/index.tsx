import React, { useEffect, useState } from 'react';
import {
  Outlet,
  useLocation,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import UploadCautionStep from './UploadCautionStep';
import { SecondaryTopbar } from '../../components/common/TopBar';
import {
  ArrowBackDefaultIcon,
  CancelDefaultIcon,
  CloseDefaultIcon,
} from '../../assets/icons';
import Text from '../../components/common/Text';
import UploadRoutes from '../index.types';
import StyledPageContainer from './UploadDefaultStep/index.styles';

type UploadContextType = {
  navigateToNextStep: () => void;
  navigateToHome: () => void;
};
type UploadLocationType = { pathname: UploadRoutes };

export default function Upload() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const segment = pathname.split('/upload').slice(-1)[0] as UploadRoutes;

  const [step, setStep] = useState<UploadRoutes>(UploadRoutes.Default);

  const navigateToHome = () => navigate('/');

  useEffect(() => {
    console.log(segment);
    setStep(segment);
  }, [segment, setStep]);

  const navigateToNextStep = () => {
    if (step === UploadRoutes.Default) {
      setStep(UploadRoutes.InProgress);
      navigate(`/upload/${UploadRoutes.InProgress}`);
    } else if (step === UploadRoutes.InProgress) {
      setStep(UploadRoutes.Guideline);
      navigate(`/upload/${UploadRoutes.Guideline}`);
    } else if (step === UploadRoutes.Guideline) {
      setStep(UploadRoutes.Caution);
      navigate(`/upload/${UploadRoutes.Caution}`);
    }
  };

  const transitionButton =
    step === UploadRoutes.Default ? (
      <button type="button" onClick={() => navigate('/')}>
        <CloseDefaultIcon />
      </button>
    ) : (
      <button type="button" onClick={() => navigate(-1)}>
        <ArrowBackDefaultIcon />
      </button>
    );
  return (
    <>
      <SecondaryTopbar
        transition={transitionButton}
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            업로드
          </Text>
        }
        icons={[]}
      />
      <StyledPageContainer>
        <Outlet
          context={
            { navigateToNextStep, navigateToHome } satisfies UploadContextType
          }
        />
      </StyledPageContainer>
    </>
  );
}

export function useNextStep() {
  return useOutletContext<UploadContextType>();
}
