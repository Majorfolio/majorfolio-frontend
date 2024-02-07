import React, { useState } from 'react'

import { BookmarkWrapper, InfoWrapper, LikeWrapper, ProfileImageWrapper, ProfileWrapper, ReactionButton, ReactionWrapper, SellerInfoWrapper } from './index.styles';
import Text from '../../common/Text';
import { 
  CharacterSmall1Icon,
  ReactionDefaultIcon,
  ReactionFilledIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
} from '../../../assets/icons';

interface MaterialSellerProfileProps {
  nickname: string;
  hasReaction: boolean;
  infoContent?: string;
  infoName?: string;
}

function MaterialSellerProfile({ nickname, hasReaction, infoContent, infoName }: MaterialSellerProfileProps) {
  const [likeChecked, setLikeChecked] = useState(false);
  const [bookmarkChecked, setBookmarkChecked] = useState(false);

  const handleLikeClick = () => {
    setLikeChecked(!likeChecked);
  }

  const handleBookmarkClick = () => {
    setBookmarkChecked(!bookmarkChecked);
  }

  return (
    <ProfileWrapper>
      <SellerInfoWrapper>
        <ProfileImageWrapper><CharacterSmall1Icon /></ProfileImageWrapper>
        <Text size={14} weight='bold' color='gray/gray900'> {nickname} </Text>
      </SellerInfoWrapper>

      {hasReaction ? (
        <ReactionWrapper>
          <LikeWrapper>
            <Text size={14} lineHeight='sm' color='gray/gray900'>00</Text>
            <ReactionButton onClick={() => handleLikeClick()}>
              {likeChecked ? <ReactionFilledIcon /> : <ReactionDefaultIcon />}
            </ReactionButton>
          </LikeWrapper>
          <BookmarkWrapper>
            <Text size={14} lineHeight='sm' color='gray/gray900'>00</Text>
            <ReactionButton onClick={handleBookmarkClick}>
              {bookmarkChecked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
            </ReactionButton>
          </BookmarkWrapper>
          
        </ReactionWrapper>
        ) : null}

        {infoName ? (
          <InfoWrapper>
            <Text size={14} color='gray/gray500'>{ infoContent }</Text>
            <Text size={14} weight='bold' color='gray/gray900'>{ infoName }</Text>
          </InfoWrapper>
        ): null}
      
      
    </ProfileWrapper>
  )
}

export default MaterialSellerProfile;