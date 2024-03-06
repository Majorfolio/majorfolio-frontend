import React, { ComponentPropsWithoutRef } from 'react';
import StyledImage from './index.styles';

interface ImagePropsType extends ComponentPropsWithoutRef<'img'> {}

export default function Image({ ...props }: ImagePropsType) {
  return <StyledImage {...props} />;
}
