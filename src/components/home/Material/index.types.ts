export default interface Material {
  id: number;
  memberId: number;
  profileImage: string;
  nickName: string;
  className: string;
  univ: string;
  major: string;
  semester: string;
  professor?: string | null;
  like: number;
}

export interface MaterialCategory {
  newUpload: Material[];
  best: Material[];
  latest: Material[];
}

export interface MaterialViewAll {
  page: number;
  materialResponseList: Material[];
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
  univ: string;
  major: string;
  semester: string;
  className: string;
  professor: string;
  grade: string;
  score: number;
  fullScore: number;
  pages: number;
  otherAssignmentList: Material[];
}

export interface MyMaterialDetail {
  id: number;
  image: string;
  updateTime: string;
  nickName: string;
  like: number;
  bookmark: number;
  title: string;
  description: string;
  univ: string;
  major: string;
  semester: string;
  className: string;
  professor: string;
  grade: string;
  score: number;
  pages: number;
  status: string;
  isMemberBookmark: boolean;
  isMemberLike: boolean;
}

export interface MyMaterialStats {
  saleStat: {
    totalSale: number;
    weeklySale: number;
    todaySale: number;
  };
  viewStat: {
    totalView: number;
    weeklyView: 3;
    todayView: 3;
  };
  bookmarkStat: {
    totalBookmark: 1;
    weeklyBookmark: 1;
    todayBookmark: 0;
  };
}
