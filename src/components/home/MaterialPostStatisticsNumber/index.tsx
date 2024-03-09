import React from 'react';

import {
  NumberWrapper,
  NumbersContainer,
  StyledMyProfileNumberContainer,
} from './index.styles';
import Text from '../../common/Text';

interface MaterialPostStatisticsNumberProps {
  sell: number;
  follower: number;
  reaction: number;
}

function MaterialPostStatisticsNumber({
  sell,
  follower,
  reaction,
}: MaterialPostStatisticsNumberProps) {
  return (
    <NumbersContainer>
      <NumberWrapper>
        <Text size={18} weight="bold" lineHeight="sm">
          {' '}
          {sell}{' '}
        </Text>
        <Text size={14} lineHeight="sm">
          판매
        </Text>
      </NumberWrapper>

      <NumberWrapper>
        <Text size={18} weight="bold" lineHeight="sm">
          {' '}
          {follower}{' '}
        </Text>
        <Text size={14} lineHeight="sm">
          팔로워
        </Text>
      </NumberWrapper>

      <NumberWrapper>
        <Text size={18} weight="bold" lineHeight="sm">
          {' '}
          {reaction}{' '}
        </Text>
        <Text size={14} lineHeight="sm">
          반응
        </Text>
      </NumberWrapper>
    </NumbersContainer>
  );
}

interface MyProifleStatisticsNumberPropsType {
  upload?: number | null;
  sell?: number | null;
  follower?: number | null;
}

export function MyProfileStatisticsNumber({
  upload,
  sell,
  follower,
}: MyProifleStatisticsNumberPropsType) {
  return (
    <StyledMyProfileNumberContainer>
      <NumberWrapper>
        <Text size={18} weight="bold" lineHeight="sm">
          {' '}
          {upload || upload === 0 ? 0 : '-'}{' '}
        </Text>
        <Text size={14} lineHeight="sm">
          업로드
        </Text>
      </NumberWrapper>

      <NumberWrapper>
        <Text size={18} weight="bold" lineHeight="sm">
          {' '}
          {sell || sell === 0 ? sell : '-'}{' '}
        </Text>
        <Text size={14} lineHeight="sm">
          판매량
        </Text>
      </NumberWrapper>

      <NumberWrapper>
        <Text size={18} weight="bold" lineHeight="sm">
          {' '}
          {follower || follower === 0 ? follower : '-'}{' '}
        </Text>
        <Text size={14} lineHeight="sm">
          팔로워
        </Text>
      </NumberWrapper>
    </StyledMyProfileNumberContainer>
  );
}

export default MaterialPostStatisticsNumber;
