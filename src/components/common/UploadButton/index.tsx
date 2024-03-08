import React, { ChangeEvent, ReactNode } from 'react';
import {
  StyledFileInput,
  StyledUploadActionButton,
  StyledUploadPreviewButton,
  StyledUploadTextSection,
} from './index.styles';
import { FileDefaultIcon, UploadPreviewIcon } from '../../../assets/icons';
import Text from '../Text';

interface UploadButtonType {
  type: 'preview' | 'action';
  onClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  file?: null | File;
}

export default function UploadButton({
  type,
  onClick,
  onChange,
  file,
  ...props
}: UploadButtonType) {
  if (type === 'preview') {
    return (
      <StyledUploadPreviewButton onClick={onClick} {...props}>
        <UploadPreviewIcon />
        <Text size={14} lineHeight="sm">
          업로드하러 가기
        </Text>
      </StyledUploadPreviewButton>
    );
  }

  if (type === 'action') {
    return (
      <StyledUploadActionButton
        as="label"
        htmlFor="uploadMaterial"
        {...props}
        hasFile={Boolean(file)}
      >
        <StyledFileInput
          type="file"
          accept=".pdf"
          id="uploadMaterial"
          onChange={onChange}
        />
        <FileDefaultIcon />
        {file ? (
          <StyledUploadTextSection hasFile={Boolean(file)}>
            <Text as="div">{file.name}</Text>
            <Text as="div">{Math.floor(file.size / 1024)}KB</Text>
          </StyledUploadTextSection>
        ) : (
          <>
            <Text>파일을 업로드해주세요</Text>
            <Text>최대 100MB</Text>
          </>
        )}
      </StyledUploadActionButton>
    );
  }
}
