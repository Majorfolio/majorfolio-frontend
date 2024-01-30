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

interface DetailProfileProps {
  hasReaction: boolean;
  infoContent?: string;
  infoName?: string;
}

function DetailProfile({ hasReaction, infoContent, infoName }: DetailProfileProps) {
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
        <Text size={14} weight='bold' color='gray/gray900'>엘사네올라프엘사네올라프</Text>
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

export default DetailProfile;