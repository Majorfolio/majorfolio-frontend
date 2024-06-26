import { StateCreator, create } from 'zustand';
import { PersistOptions, persist } from 'zustand/middleware';

interface DraftSlice {
  file: null | File;
  title: string;
  major: string;
  semester: string;
  className: string;
  professor: string;
  grade: string;
  fullScore: string;
  score: string;
  description: string;
  updateDraft: (draft: Partial<DraftSlice>) => void;
  reset: () => void;
  updateDraftProp: (draftProp: keyof DraftSlice, fieldValue: string) => void;
  resetFile: () => void;
}

type MyPersist = (
  config: StateCreator<DraftSlice>,
  options: PersistOptions<DraftSlice>,
) => StateCreator<DraftSlice>;

const initialState = {
  file: null,
  title: '',
  major: '',
  semester: '',
  className: '',
  professor: '',
  grade: '',
  fullScore: '',
  score: '',
  description: '',
};

const useDraftStore = create<DraftSlice>()(
  persist(
    (set) => ({
      ...initialState,
      updateDraft: (draft: Partial<DraftSlice>) => {
        set((state) => ({
          ...state,
          ...draft,
        }));
      },
      reset: () => {
        set({
          file: null,
          title: '',
          major: '',
          semester: '',
          className: '',
          professor: '',
          grade: '',
          fullScore: '',
          score: '',
          description: '',
        });
      },
      updateDraftProp: (draftProp, fieldValue) => {
        set((state) => ({
          ...state,
          [draftProp]: fieldValue,
        }));
      },
      resetFile: () => {
        set((state) => ({
          ...state,
          file: null,
        }));
      },
    }),
    { name: 'draft' },
  ),
);

export default useDraftStore;
