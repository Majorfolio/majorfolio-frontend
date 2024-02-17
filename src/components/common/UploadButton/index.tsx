import React, { ReactNode } from 'react';
import {
  StyledUploadActionButton,
  StyledUploadPreviewButton,
} from './index.styles';
import { FileDefaultIcon, UploadPreviewIcon } from '../../../assets/icons';
import Text from '../Text';

interface UploadButtonType {
  type: 'preview' | 'action';
  onClick: () => void;
}

export default function UploadButton({ type, ...props }: UploadButtonType) {
  if (type === 'preview') {
    return (
      <StyledUploadPreviewButton {...props}>
        <UploadPreviewIcon />
        <Text size={14} lineHeight="sm">
          업로드하러 가기
        </Text>
      </StyledUploadPreviewButton>
    );
  }

  if (type === 'action') {
    return (
      <StyledUploadActionButton {...props}>
        <FileDefaultIcon />
        <Text>파일을 업로드해주세요</Text>
        <Text>최대 100MB</Text>
      </StyledUploadActionButton>
    );
  }
}
