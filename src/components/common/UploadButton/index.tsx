import React, { ChangeEvent, ReactNode } from 'react';
import {
  StyledFileInput,
  StyledUploadActionButton,
  StyledUploadPreviewButton,
  StyledUploadTextSection,
} from './index.styles';
import {
  FileDefaultIcon,
  FilePrimaryIcon,
  UploadPreviewIcon,
} from '../../../assets/icons';
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
  const hasFile = Boolean(file);

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
        hasFile={hasFile}
      >
        <StyledFileInput
          type="file"
          accept=".pdf"
          id="uploadMaterial"
          onChange={onChange}
        />
        {hasFile ? <FilePrimaryIcon /> : <FileDefaultIcon />}
        {file ? (
          <StyledUploadTextSection hasFile={Boolean(file)}>
            <Text as="div" size={14} weight="bold" lineHeight="sm">
              {file.name}
            </Text>
            <Text as="div" size={12} lineHeight="sm">
              {Math.floor(file.size / 1024)}KB
            </Text>
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
