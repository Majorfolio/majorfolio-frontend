import React from 'react'

import * as S from './index.styles';
import Text from '../../common/Text';
import { CharacterSmall1Icon } from '../../../assets/icons';

interface DetailProfileProps {
  hasReaction: boolean;
  infoContent?: string;
  infoName?: string;
}

function DetailProfile({ hasReaction, infoContent, infoName }: DetailProfileProps) {
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

        {infoName ? (
          <S.InfoWrapper>
            <Text size={14} color='gray/gray500'>{ infoContent }</Text>
            <Text size={14} weight='bold' color='gray/gray900'>{ infoName }</Text>
          </S.InfoWrapper>
        ): null}
      
      
    </S.ProfileWrapper>
  )
}

export default DetailProfile;