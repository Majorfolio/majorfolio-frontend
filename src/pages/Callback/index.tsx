import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useTokenExchange from './useTokenExchange';
import Text from '../../components/common/Text';

export default function Callback() {
  const { isLoading, auth } = useTokenExchange();
  if (!isLoading) {
    return <Text>로그인 중입니다...</Text>;
  }

  const { isMember, memberId, accessToken, refreshToken } = auth;
  return (
    <Text>
      로그인에 성공했습니다! 로그인 중입니다...
      <div>isMember{isMember}</div>
      <div>memberId{memberId}</div>
      <div>accessToken{accessToken}</div>
      <div>refreshToken{refreshToken}</div>
    </Text>
  );
}
