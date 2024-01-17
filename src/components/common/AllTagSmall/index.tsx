import React from 'react'

import * as S from './index.styles';
import Text from '../Text';
import theme, { ColorType } from '../theme';

interface AllTagSmallProps {
  text: string;
  color?: string;
}

function AllTagSmall({ text, color }: AllTagSmallProps) {
  let backColor: string = theme.color['gray/gray100'];
  let textColor: ColorType = 'gray/gray900';
  switch (color) {
    case 'dark':
      backColor = theme.color['gray/gray900'];
      textColor = 'gray/white';
      break;
    case 'white':
      backColor = theme.color['gray/gray100'];
      textColor = 'gray/gray900';
      break;
    case 'red':
      backColor = theme.color['sub_color/red/c'];
      textColor = 'sub_color/red/p';
      break;
    case 'green':
      backColor = theme.color['sub_color/green/c'];
      textColor = 'sub_color/green/p';
      break;
    case 'yellow':
      backColor = theme.color['sub_color/yellow/c'];
      textColor = 'main_color/yellow_s';
      break;
    case 'blue':
      backColor = theme.color['sub_color/indigo/c'];
      textColor = 'sub_color/indigo/p';
      break;
    default:
      break;
  }
  return (
    <S.Tag style={{ backgroundColor: backColor }}>
      <Text size={10} weight='bold' lineHeight='sm' color={textColor}>{ text }</Text>
    </S.Tag>
  );
}

export default AllTagSmall;