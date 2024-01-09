import styled from "styled-components";
import { ReactionDefaultIcon, BookmarkIcon } from '../../../assets/icons';

export const ProfileWrapper = styled.div`
  height: 24px;
  padding: 16px 20px;
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

export const ProfileName = styled.span`
  color: #232629;
  font-size: 14px;
  font-weight: 700;
  line-height: 19.60px;
  word-wrap: break-word;
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

export const LikeCount = styled.span`
  color: #232629;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.80px;
  word-wrap: break-word;
`;

export const Like = styled(ReactionDefaultIcon)`

`;

export const BookmarkWrapper = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const BookmarkCount = styled.span`
  color: #232629;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.80px;
  word-wrap: break-word;
`;

export const Bookmark = styled(BookmarkIcon)`

`;