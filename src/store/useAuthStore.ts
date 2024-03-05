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

    set((state) => ({
      ...state,
      ...auth,
      authLevel: auth.isMember ? AuthLevel.Member : AuthLevel.Unverified,
    }));

    const { accessToken, refreshToken } = auth;
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
    return auth;
  },

  signout() {
    set(initialState);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  },

  setIsMember() {
    set((state) => ({ ...state, isMember: true }));
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
