export default interface Material {
  id: number;
  memberId: number;
  imageUrl: string;
  nickName: string;
  className: string;
  univ: string;
  major: string;
  semester: string;
  professor?: string | null;
  like: number;
}

export interface MaterialCategory {
  "newUpload": Material[];
  "best": Material[];
  "latest": Material[];
}

export interface MaterialViewAll {
  page: number;
  "materialResponseList": Material[];
  end: boolean;
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