import { create } from 'zustand';

const initialState = {
  emailId: undefined,
};

interface EmailStateType {
  emailId?: number;
  setEmail: (currentEmailId: number) => void;
  resetEmail: () => void;
}

const useEmailStore = create<EmailStateType>((set, get) => ({
  ...initialState,

  setEmail(currentEmailId) {
    set((state) => ({
      ...state,
      emailId: currentEmailId,
    }));
  },

  resetEmail() {
    set((state) => ({ ...state, ...initialState }));
  },
}));

export default useEmailStore;
