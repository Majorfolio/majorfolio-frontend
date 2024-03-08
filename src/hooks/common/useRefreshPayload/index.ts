import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../../store/useAuthStore';
import { RetryPayload } from '../../../apis/member';

export default function useRefreshPayload() {
  const refreshToken = useAuthStore((state) => state.refreshToken)!;
  const signout = useAuthStore((state) => state.signout);
  const refresh = useAuthStore((state) => state.refresh);
  const navigate = useNavigate();

  const onRetrySuccess = (newAccessToken: string, newRefreshToken: string) => {
    // alert(newAccessToken);
    // alert(newRefreshToken);
    signout();
    refresh(newAccessToken, newRefreshToken);
  };

  const onRetryFail = () => {
    signout();
    navigate('/home');
  };

  return { refreshToken, onRetrySuccess, onRetryFail } as RetryPayload;
}
