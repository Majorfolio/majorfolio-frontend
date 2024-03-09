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
import useRequireAuth from '../../hooks/common/useRequireAuth';
import { AuthLevel } from '../../store/useAuthStore';

type UploadContextType = {
  navigateToNextStep: () => void;
  navigateToHome: () => void;
};

// TODO move function to different file when it's used in common

const getChlidSegment = (
  pathname: string,
  parentSegment: string,
): UploadRoutes => {
  const segments = pathname.split('/');
  const endingSegment = segments.slice(-1)[0];
  if (endingSegment === parentSegment) {
    return '' as UploadRoutes.Default;
  }
  return endingSegment as UploadRoutes;
};

export default function Upload() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const childSegment = getChlidSegment(pathname, 'upload');
  const [step, setStep] = useState<UploadRoutes>(UploadRoutes.Default);

  const navigateToHome = () => navigate('/');

  const { isAuthLevelSatisfied } = useRequireAuth(
    AuthLevel.Member,
    AuthLevel.Member,
  );

  useEffect(() => {
    setStep(childSegment);
  }, [childSegment, setStep]);

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
      <button type="button" onClick={() => navigate('/')} aria-label="close">
        <CloseDefaultIcon />
      </button>
    ) : (
      <button type="button" onClick={() => navigate(-1)} aria-label="prev">
        <ArrowBackDefaultIcon />
      </button>
    );

  if (!isAuthLevelSatisfied) {
    return <span />;
  }

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
