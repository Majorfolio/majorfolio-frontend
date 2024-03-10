export interface AssignmentId {
  assignmentId: number;
}

export interface CouponId {
  couponId: number;
}

export interface Order {
  assignmentIdList: AssignmentId[];
  couponIdList: CouponId[];
  totalPrice: number;
}

export interface Assignment {
  assignmentName: string;
}

export interface OrderInfo {
  nameList: Assignment[];
  totalPrice: number;
  createDate: string; // 날짜 형식은 문자열로 가정합니다.
  code: string;
  materialNameResponseList: {
    assignmentName: string;
  }[];
}
