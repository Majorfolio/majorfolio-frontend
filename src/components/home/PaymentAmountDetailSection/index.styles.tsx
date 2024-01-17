import styled from "styled-components";
import { CouponDefaultIcon } from "../../../assets/icons";

export const DetailsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CouponTitleWrapper = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const CouponIcon = styled(CouponDefaultIcon)`
  width: 16px;
  height: auto;
`;