import { create } from 'zustand';
import { access } from 'fs';
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
  restoreCredentials: () => boolean;
};

const useAuthStore = create<AuthStateType>((set, get) => ({
  ...initialState,

  // TODO use refresh token when access token gets expired
  restoreCredentials() {
    // restore credentials only when there are no credentials
    if (!get().accessToken && !get().refreshToken) {
      const storedAccessToken = localStorage.getItem('accessToken');
      const storedRefreshToken = localStorage.getItem('refreshToken');
      if (!storedAccessToken || !storedRefreshToken) {
        return false;
      }

      set((state) => ({
        ...state,
        accessToken: storedAccessToken,
        refreshToken: storedRefreshToken,
      }));
    }
    return true;
  },

  async signin(code: string) {
    const idToken = await getIdToken(code);
    const auth = await getAuth(idToken);
    set((state) => ({
      ...state,
      ...auth,
    }));

    const { accessToken, refreshToken } = auth;
    // localStorage.setItem(ACCESS_TOKEN, accessToken);
    // localStorage.setItem(REFRESH_TOKEN, refreshToken);
    return auth;
  },

  signout() {
    set(initialState);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeitem(REFRESH_TOKEN);
  },
}));

export default useAuthStore;
