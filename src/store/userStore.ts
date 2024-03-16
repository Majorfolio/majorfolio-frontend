import { create } from 'zustand';

export interface UserStateType {
  emailId: null | number;
  nickName: string;
  univ: string;
  studentId: null | number;
  major1: string;
  major2: string;
  personalAgree: boolean;
  serviceAgree: boolean;
  marketingAgree: boolean;
  updateEmail: (newEmailId: number) => void;
  updateDetails: (
    details: Pick<UserStateType, 'univ' | 'studentId' | 'major1' | 'major2'>,
  ) => void;
  updateNickName: (nickName: string) => void;
}

const initialState = {
  nickName: '',
  univ: '',
  studentId: null,
  major1: '',
  major2: '',
  personalAgree: false,
  serviceAgree: false,
  marketingAgree: false,
  emailId: null,
};

const useUserStore = create<UserStateType>((set, get) => ({
  ...initialState,

  updateEmail(newEmailId) {
    set((state) => ({
      ...state,
      emailId: newEmailId,
    }));
  },

  updateDetails({ univ, studentId, major1, major2 }) {
    set((state) => ({
      ...state,
      univ,
      studentId,
      major1,
      major2,
    }));
  },

  updateNickName(newNickName: string) {
    set((state) => ({
      ...state,
      nickName: newNickName,
    }));
  },
}));

export default useUserStore;
