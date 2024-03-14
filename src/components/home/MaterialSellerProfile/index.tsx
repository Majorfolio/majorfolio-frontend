import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {
  BookmarkWrapper,
  InfoWrapper,
  LikeWrapper,
  ProfileImageWrapper,
  ProfileWrapper,
  ReactionButton,
  ReactionWrapper,
  SellerInfoWrapper,
} from './index.styles';
import Text from '../../common/Text';
import {
  CharacterSmall1Icon,
  ReactionDefaultIcon,
  ReactionFilledIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
} from '../../../assets/icons';
import {
  getMaterialDetail,
  updateBookmark,
  updateLike,
} from '../../../apis/materials';
import useAuthStore, { AuthLevel } from '../../../store/useAuthStore';
import useRefreshPayload from '../../../hooks/common/useRefreshPayload';

interface MaterialSellerProfileProps {
  id?: number;
  nickname: string;
  hasReaction: boolean;
  like?: number;
  bookmark?: number;
  infoContent?: string;
  infoName?: string;
  hasMemberLiked?: boolean;
  hasMemberBookmarked?: boolean;
  toggleLike?: () => void;
  toggleBookmark?: () => void;
  memberId?: number;
}

function MaterialSellerProfile({
  id,
  nickname,
  hasReaction,
  like = 0,
  bookmark = 0,
  hasMemberLiked,
  hasMemberBookmarked,
  toggleLike,
  toggleBookmark,
  infoContent,
  infoName,
  memberId,
}: MaterialSellerProfileProps) {
  const accessToken = useAuthStore((state) => state.accessToken);
  const authLevel = useAuthStore((state) => state.authLevel);

  const refreshPayload = useRefreshPayload();
  const navigate = useNavigate();

  const handleLikeClick = async () => {
    if (hasReaction && id && accessToken && toggleLike) {
      toggleLike();
      await updateLike(id, accessToken, refreshPayload);
    }
  };

  const handleBookmarkClick = async () => {
    if (hasReaction && id && accessToken && toggleBookmark) {
      toggleBookmark();
      await updateBookmark(id, accessToken, refreshPayload);
    }
  };

  return (
    <ProfileWrapper>
      {!!memberId && (
        <SellerInfoWrapper
          as="button"
          type="button"
          onClick={() => {
            navigate(`/seller/${memberId}`);
          }}
        >
          <ProfileImageWrapper>
            <CharacterSmall1Icon />
          </ProfileImageWrapper>
          <Text size={14} weight="bold" color="gray/gray900">
            {' '}
            {nickname}{' '}
          </Text>
        </SellerInfoWrapper>
      )}
      {!memberId && (
        <SellerInfoWrapper>
          <ProfileImageWrapper>
            <CharacterSmall1Icon />
          </ProfileImageWrapper>
          <Text size={14} weight="bold" color="gray/gray900">
            {' '}
            {nickname}{' '}
          </Text>
        </SellerInfoWrapper>
      )}

      {hasReaction ? (
        <ReactionWrapper>
          <LikeWrapper>
            <Text size={14} lineHeight="sm" color="gray/gray900">
              {' '}
              {like}{' '}
            </Text>
            {authLevel === AuthLevel.Member && (
              <ReactionButton onClick={handleLikeClick}>
                hasMemberLiked ? <ReactionFilledIcon /> :
                <ReactionDefaultIcon />
              </ReactionButton>
            )}
            {authLevel === AuthLevel.Member &&
              (hasMemberLiked ? (
                <ReactionFilledIcon />
              ) : (
                <ReactionDefaultIcon />
              ))}
          </LikeWrapper>
          <BookmarkWrapper>
            <Text size={14} lineHeight="sm" color="gray/gray900">
              {' '}
              {bookmark}{' '}
            </Text>
            {authLevel === AuthLevel.Member && (
              <ReactionButton onClick={handleBookmarkClick}>
                hasMemberBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />
              </ReactionButton>
            )}
            {authLevel !== AuthLevel.Member &&
              (hasMemberBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />)}
          </BookmarkWrapper>
        </ReactionWrapper>
      ) : null}

      {infoName ? (
        <InfoWrapper>
          <Text size={14} color="gray/gray500">
            {infoContent}
          </Text>
          <Text size={14} weight="bold" color="gray/gray900">
            {infoName}
          </Text>
        </InfoWrapper>
      ) : null}
    </ProfileWrapper>
  );
}

export default MaterialSellerProfile;
