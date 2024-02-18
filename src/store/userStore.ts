import { create } from 'zustand';

export interface UserStateType {
  emailId: null | number;
  nickName: string;
  universityName: string;
  studentId: null | number;
  major1: string;
  major2: string;
  personalAgree: boolean;
  serviceAgree: boolean;
  marketingAgree: boolean;
  updateEmail: (newEmailId: number) => void;
  updateDetails: (
    details: Pick<
      UserStateType,
      'universityName' | 'studentId' | 'major1' | 'major2'
    >,
  ) => void;
  updateNickname: (nickname: string) => void;
}

const initialState = {
  nickName: '',
  universityName: '',
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

  updateDetails({ universityName, studentId, major1, major2 }) {
    set((state) => ({
      ...state,
      universityName,
      studentId,
      major1,
      major2,
    }));
  },

  updateNickname(newNickName: string) {
    set((state) => ({
      ...state,
      nickName: newNickName,
    }));
  },
}));

export default useUserStore;
