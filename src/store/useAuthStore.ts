import { create } from 'zustand';
import { access } from 'fs';
import getIdToken from '../apis/auth';
import { AuthResultType, getAuth } from '../apis/member';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

export enum AuthLevel {
  Guest,
  Unverified,
  Member,
}

const initialState = {
  isMember: false,
  memberId: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  authLevel: AuthLevel.Guest,
};

type AuthStateType = {
  isMember: boolean;
  memberId?: number;
  accessToken?: string;
  refreshToken?: string;
  authLevel: AuthLevel;
  signin: (code: string) => Promise<AuthResultType>;
  signout: () => void;
  restoreCredentials: () => boolean;
  setIsMember: () => void;
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
    return auth;
    // localStorage.setItem(ACCESS_TOKEN, accessToken);
    // localStorage.setItem(REFRESH_TOKEN, refreshToken);
  },

  signout() {
    set(initialState);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeitem(REFRESH_TOKEN);
  },

  setIsMember() {
    set((state) => ({ ...state, isMember: true }));
  },
}));

export default useAuthStore;
