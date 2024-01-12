import styled from "styled-components";

export const CouponSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CouponCountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CouponText = styled.span`
  color: #232629;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.80px;
  word-wrap: break-word;
`;

export const CouponCountText = styled.span`
  color: #767D86;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.80px;
  word-wrap: break-word;
`;

export const CouponButton = styled.div`
  height: 52px;
  padding: 0 16px;
  border-radius: 6px;
  background: #FFE9BF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const AvailableCouponWrapper = styled.span`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const CouponAvailableText = styled.span`
  color: #FF7A00;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.80px;
  word-wrap: break-word;
`;