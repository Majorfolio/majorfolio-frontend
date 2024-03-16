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
}

type MyPersist = (
  config: StateCreator<DraftSlice>,
  options: PersistOptions<DraftSlice>,
) => StateCreator<DraftSlice>;

const initialState: DraftSlice = {
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
  updateDraft: () => undefined,
  reset: () => undefined,
  updateDraftProp: () => undefined,
};

const useDraftStore = create<DraftSlice>(
  (persist as MyPersist)(
    (set): DraftSlice => ({
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
    }),
    { name: 'draft' },
  ),
);

export default useDraftStore;
