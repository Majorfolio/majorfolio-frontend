import React from 'react'

import * as S from './AllTagSmall.styles';

interface AllTagSmallProps {
  text: string;
}

function AllTagSmall({ text }: AllTagSmallProps) {
  return (
    <S.Tag>{ text }</S.Tag>
  );
}

export default AllTagSmall;