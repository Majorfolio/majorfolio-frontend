import React, { useEffect, useState } from 'react';

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
import useAuthStore from '../../../store/useAuthStore';

interface MaterialSellerProfileProps {
  id?: number;
  nickname: string;
  hasReaction: boolean;
  like?: number;
  bookmark?: number;
  infoContent?: string;
  infoName?: string;
}

function MaterialSellerProfile({
  id,
  nickname,
  hasReaction,
  like = 0,
  bookmark = 0,
  infoContent,
  infoName,
}: MaterialSellerProfileProps) {
  const [likeChecked, setLikeChecked] = useState(false);
  const [bookmarkChecked, setBookmarkChecked] = useState(false);
  const [likeCount, setLikeCount] = useState(like);
  const [bookmarkCount, setBookmarkCount] = useState(bookmark);
  const authStore = useAuthStore((state) => state.accessToken);

  const handleLikeClick = () => {
    // setLikeChecked(!likeChecked);
    if (hasReaction && id && authStore) {
      setLikeChecked(!likeChecked);
      updateLike(id, authStore);
      getMaterialDetail(id, authStore).then((response) => {
        setLikeCount(response.result.like);
      });
    }
  };

  const handleBookmarkClick = () => {
    if (hasReaction && id && authStore) {
      setBookmarkChecked(!bookmarkChecked);
      updateBookmark(id, authStore);
      getMaterialDetail(id, authStore).then((response) => {
        setBookmarkCount(response.result.bookmark);
      });
    }
  };

  useEffect(() => {
    if (id && authStore) {
      getMaterialDetail(id, authStore).then((response) => {
        setLikeChecked(response.result.isMemberLike);
        setLikeCount(response.result.like);
        setBookmarkChecked(response.result.isMemberBookmark);
        setBookmarkCount(response.result.bookmark);
      });
    }
  }, [likeChecked, bookmarkChecked]);

  return (
    <ProfileWrapper>
      <SellerInfoWrapper>
        <ProfileImageWrapper>
          <CharacterSmall1Icon />
        </ProfileImageWrapper>
        <Text size={14} weight="bold" color="gray/gray900">
          {' '}
          {nickname}{' '}
        </Text>
      </SellerInfoWrapper>

      {hasReaction ? (
        <ReactionWrapper>
          <LikeWrapper>
            <Text size={14} lineHeight="sm" color="gray/gray900">
              {' '}
              {likeCount}{' '}
            </Text>
            <ReactionButton onClick={() => handleLikeClick()}>
              {likeChecked ? <ReactionFilledIcon /> : <ReactionDefaultIcon />}
            </ReactionButton>
          </LikeWrapper>
          <BookmarkWrapper>
            <Text size={14} lineHeight="sm" color="gray/gray900">
              {' '}
              {bookmarkCount}{' '}
            </Text>
            <ReactionButton onClick={handleBookmarkClick}>
              {bookmarkChecked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
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
  );
}

export default MaterialSellerProfile;
