import { create } from 'zustand';

export interface MaterialType {
  title: string;
  major: string;
  semester: string;
  subjectName: string;
  professor: string;
  grade: string;
  fullScore: number | null;
  score: number | null;
  description: string;
}

type MaterialStateType = MaterialType & {
  updateMaterial: (material: MaterialType) => void;
};

const initialState = {
  title: '',
  major: '',
  semester: '',
  subjectName: '',
  professor: '',
  grade: '',
  fullScore: null,
  score: null,
  description: '',
};

const useMaterialStore = create<MaterialStateType>((set, get) => ({
  ...initialState,

  updateMaterial(material) {
    set((state) => ({
      ...state,
      ...material,
    }));
  },
}));

export default useMaterialStore;
