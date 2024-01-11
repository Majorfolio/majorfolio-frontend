import React from 'react'

import * as S from './index.styles';
import { CharacterSmall1Icon } from '../../../assets/icons';

function DetailProfile() {
  return (
    <S.ProfileWrapper>
      <S.SellerInfoWrapper>
        <S.ProfileImageWrapper><CharacterSmall1Icon /></S.ProfileImageWrapper>
        <S.ProfileName>엘사네올라프</S.ProfileName>
      </S.SellerInfoWrapper>

      <S.ReactionWrapper>
        <S.LikeWrapper>
          <S.LikeCount>00</S.LikeCount>
          <S.Like />
        </S.LikeWrapper>
        <S.BookmarkWrapper>
          <S.BookmarkCount>00</S.BookmarkCount>
          <S.Bookmark />
        </S.BookmarkWrapper>
        
      </S.ReactionWrapper>
      
    </S.ProfileWrapper>
  )
}

export default DetailProfile;