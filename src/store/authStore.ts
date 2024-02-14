import { create } from 'zustand';
import getIdToken from '../apis/auth';
import { getAuth } from '../apis/member';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

const initialState = {
  isMember: undefined,
  memberId: undefined,
  accessToken: undefined,
  refreshToken: undefined,
};

type AuthStateType = {
  isMember?: boolean;
  memberId?: number;
  accessToken?: string;
  refreshToken?: string;
  signin: (code: string) => Promise<AuthStateType>;
  signout: () => void;
};

const useAuthStore = create<AuthStateType>((set, get) => ({
  ...initialState,

  async signin(code: string) {
    const idToken = await getIdToken(code);
    const auth = await getAuth(idToken);
    set((state) => ({
      ...state,
      auth,
    }));

    const { accessToken, refreshToken } = auth;
    localStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken));
    localStorage.setItem(REFRESH_TOKEN, JSON.stringify(refreshToken));
    return auth;
  },

  signout() {
    set(initialState);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeitem(REFRESH_TOKEN);
  },
}));

export default useAuthStore;
