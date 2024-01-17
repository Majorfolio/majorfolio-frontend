import styled from "styled-components";
import { ReactionDefaultIcon, BookmarkIcon } from '../../../assets/icons';

export const ProfileWrapper = styled.div`
  height: 24px;
  /* padding: 16px 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SellerInfoWrapper = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ProfileImageWrapper = styled.span`
  width: 24px;
  height: 24px;
`;

export const ReactionWrapper = styled.span`
  display: flex;
  gap: 18px;
`;

export const LikeWrapper = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Like = styled(ReactionDefaultIcon)`

`;

export const BookmarkWrapper = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Bookmark = styled(BookmarkIcon)`

`;