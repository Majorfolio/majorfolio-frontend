export default interface Material {
  id: number;
  nickname: string;
  className: string;
  univ?: string | null;
  major?: string | null;
  semester?: string | null;
  professor?: string | null;
  like?: number | null;
}

export interface MaterialCategory {
  "newUpload": Material[];
  "best": Material[];
  "latest": Material[];
}

export interface MaterialViewAll {
  page: number;
  "materialResponseList": Material[];
}

export interface MaterialDetail {
  id: number;
  imageUrl: string;
  updateTime: string;
  nickName: string;
  like: number;
  bookmark: number;
  title: string;
  description: string;
  sell: number;
  follower: number;
  university: string;
  major: string;
  semester: string;
  subjectTitle: string;
  professor: string;
  grade: string;
  score: number;
  fullScore: number;
  pages: number;
  otherAssignmentList: Material[];
}