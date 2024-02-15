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
  "page": number;
  "materialResponseList": Material[];
}