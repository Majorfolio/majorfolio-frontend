import React from 'react'

import * as S from './AllTagSmall.styles';

const AllTagSmall = ({ text }) => {
  return (
    <>
      <S.Tag>{ text }</S.Tag>
    </>
  )
}

export default AllTagSmall