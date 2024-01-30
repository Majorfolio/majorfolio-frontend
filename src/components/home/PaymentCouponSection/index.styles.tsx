import styled from "styled-components";
import theme from "../../common/theme";

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

export const CouponButton = styled.div`
  height: 52px;
  padding: 0 16px;
  border-radius: 6px;
  background: ${ theme.color['sub_color/yellow/c'] };
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