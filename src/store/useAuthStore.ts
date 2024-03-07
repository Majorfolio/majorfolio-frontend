import { create } from 'zustand';
import getIdToken from '../apis/auth';
import { AuthResultType, getAuth } from '../apis/member';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

export enum AuthLevel {
  Guest,
  Unverified,
  Verified,
  Member,
}

const initialState = {
  isWriteMemberDetailInfo: false,
  memberId: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  authLevel: AuthLevel.Guest,
};

type AuthStateType = {
  isWriteMemberDetailInfo: boolean;
  memberId?: number;
  accessToken?: string;
  refreshToken?: string;
  authLevel: AuthLevel;
  signin: (code: string) => Promise<AuthResultType>;
  signout: () => void;
  restoreCredentials: () => void;
  updateTokens: (accessToken: string, refreshToken: string) => void;
  setIsMember: () => void;
};

const useAuthStore = create<AuthStateType>((set, get) => ({
  ...initialState,

  updateTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    set((state) => ({
      ...state,
      accessToken,
      refreshToken,
    }));
  },

  // TODO use refresh token when access token gets expired
  restoreCredentials() {
    // restore credentials only when there are no credentials
    const currentAccessToken = get().accessToken;
    const currentRefreshToken = get().refreshToken;
    if (currentAccessToken && currentRefreshToken) {
      return;
    }
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedRefreshToken = localStorage.getItem('refreshToken');

    if (!storedAccessToken || !storedRefreshToken) {
      return;
    }

    set((state) => ({
      ...state,
      accessToken: storedAccessToken,
      refreshToken: storedRefreshToken,
      authLevel: AuthLevel.Member,
    }));
  },

  async signin(code: string) {
    const idToken = await getIdToken(code);
    const auth = await getAuth(idToken);

    if (auth.isWriteMemberDetailInfo) {
      set((state) => ({
        ...state,
        ...auth,
        authLevel: AuthLevel.Member,
      }));
      localStorage.setItem(ACCESS_TOKEN, auth.accessToken);
      localStorage.setItem(REFRESH_TOKEN, auth.refreshToken);
    } else if (auth.emailId) {
      set((state) => ({
        ...state,
        ...auth,
        authLevel: AuthLevel.Verified,
      }));
    } else if (!auth.emailId) {
      set((state) => ({
        ...state,
        ...auth,
        authLevel: AuthLevel.Unverified,
      }));
    } else {
      set((state) => ({
        ...state,
        ...auth,
        authLevel: AuthLevel.Guest,
      }));
    }

    return auth;
  },

  signout() {
    set(initialState);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  },

  setIsMember() {
    set((state) => ({ ...state, isWriteMemberDetailInfo: true }));
  },

  clearAccessToken() {
    set((state) => ({
      ...state,
      accessToken: undefined,
      authLevel: AuthLevel.Guest,
    }));
  },
}));

export default useAuthStore;
