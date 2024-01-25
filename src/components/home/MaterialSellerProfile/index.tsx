import React from 'react'

import * as S from './index.styles';
import Text from '../../common/Text';
import { CharacterSmall1Icon } from '../../../assets/icons';

interface DetailProfileProps {
  hasReaction: boolean;
}

function DetailProfile({ hasReaction }: DetailProfileProps) {
  return (
    <S.ProfileWrapper>
      <S.SellerInfoWrapper>
        <S.ProfileImageWrapper><CharacterSmall1Icon /></S.ProfileImageWrapper>
        <Text size={14} weight='bold' color='gray/gray900'>엘사네올라프엘사네올라프</Text>
      </S.SellerInfoWrapper>

      {hasReaction ? (
        <S.ReactionWrapper>
          <S.LikeWrapper>
            <Text size={14} lineHeight='sm' color='gray/gray900'>00</Text>
            <S.Like />
          </S.LikeWrapper>
          <S.BookmarkWrapper>
            <Text size={14} lineHeight='sm' color='gray/gray900'>00</Text>
            <S.Bookmark />
          </S.BookmarkWrapper>
          
        </S.ReactionWrapper>
        ) : null}
      
      
    </S.ProfileWrapper>
  )
}

export default DetailProfile;