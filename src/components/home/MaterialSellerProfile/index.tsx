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
import useModal from '../../../hooks/common/useModal';
import Modal from '../../common/Modal';
import { SmallPortrait } from '../../common/Portrait';

interface MaterialSellerProfileProps {
  id?: number;
  nickName: string;
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
  profileImage: string;
}

function MaterialSellerProfile({
  id,
  nickName,
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
  profileImage,
}: MaterialSellerProfileProps) {
  const accessToken = useAuthStore((state) => state.accessToken)!;
  const authLevel = useAuthStore((state) => state.authLevel);

  const refreshPayload = useRefreshPayload();
  const navigate = useNavigate();
  const { activateModal, closePrimarily, closeSecondarily, ...modalProps } =
    useModal();

  const handleLikeClick = async () => {
    if (authLevel === AuthLevel.Guest) {
      activateModal('REQUIRE_SIGNIN', {
        primaryAction: () => navigate('/signin'),
      });
    } else if (authLevel === AuthLevel.Unverified) {
      activateModal('REQUIRE_SCHOOL_VERIFICATION', {
        primaryAction: () => navigate('/signin'),
      });
    } else if (authLevel === AuthLevel.Verified) {
      activateModal('REGISTER_INCOMPLETE', {
        primaryAction: () => navigate('/signin'),
      });
    } else if (
      authLevel === AuthLevel.Member &&
      hasReaction &&
      id &&
      toggleLike
    ) {
      toggleLike();
      await updateLike(id, accessToken, refreshPayload);
    }
  };

  const handleBookmarkClick = async () => {
    if (authLevel === AuthLevel.Guest) {
      activateModal('REQUIRE_SIGNIN', {
        primaryAction: () => navigate('/signin'),
      });
    } else if (authLevel === AuthLevel.Unverified) {
      activateModal('REQUIRE_SCHOOL_VERIFICATION', {
        primaryAction: () => navigate('/signin'),
      });
    } else if (authLevel === AuthLevel.Verified) {
      activateModal('REGISTER_INCOMPLETE', {
        primaryAction: () => navigate('/signin'),
      });
    } else if (
      authLevel === AuthLevel.Member &&
      hasReaction &&
      id &&
      toggleBookmark
    ) {
      toggleBookmark();
      await updateBookmark(id, accessToken, refreshPayload);
    }
  };

  return (
    <>
      <Modal
        {...modalProps}
        onPrimaryAction={closePrimarily}
        onSecondaryAction={closeSecondarily}
      />
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
              <SmallPortrait index={profileImage} />
            </ProfileImageWrapper>
            <Text size={14} weight="bold" color="gray/gray900">
              {' '}
              {nickName}{' '}
            </Text>
          </SellerInfoWrapper>
        )}
        {!memberId && (
          <SellerInfoWrapper>
            <ProfileImageWrapper>
              <SmallPortrait index={profileImage} />
            </ProfileImageWrapper>
            <Text size={14} weight="bold" color="gray/gray900">
              {' '}
              {nickName}{' '}
            </Text>
          </SellerInfoWrapper>
        )}

        {hasReaction ? (
          <ReactionWrapper>
            <LikeWrapper>
              <Text size={14} lineHeight="sm" color="gray/gray900">
                {like}
              </Text>
              <ReactionButton onClick={handleLikeClick}>
                {hasMemberLiked ? (
                  <ReactionFilledIcon />
                ) : (
                  <ReactionDefaultIcon />
                )}
              </ReactionButton>
            </LikeWrapper>
            <BookmarkWrapper>
              <Text size={14} lineHeight="sm" color="gray/gray900">
                {bookmark}
              </Text>
              <ReactionButton onClick={handleBookmarkClick}>
                {hasMemberBookmarked ? (
                  <BookmarkFilledIcon />
                ) : (
                  <BookmarkIcon />
                )}
              </ReactionButton>
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
    </>
  );
}

export default MaterialSellerProfile;
