import React from 'react';
import Text from '../../../components/common/Text';
import StyledPageContainer, {
  StyledDraftEditButton,
  StyledDraftSectionTitleRow,
} from './index.styles';
import UploadButton from '../../../components/common/UploadButton';
import UploadSection from '../../../components/common/UploadSection';
import Button from '../../../components/common/Button';

export default function UploadDefaultStep() {
  const uploadSectionTitle = (
    <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
      새로 업로드
    </Text>
  );

  const draftSectionTitleRow = (
    <StyledDraftSectionTitleRow>
      <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
        임시 저장함
      </Text>
      <StyledDraftEditButton type="button" backgroundColor="gray/grayBG">
        <Text color="gray/gray500" size={14} lineHeight="sm">
          편집
        </Text>
      </StyledDraftEditButton>
    </StyledDraftSectionTitleRow>
  );

  return (
    <StyledPageContainer>
      <UploadSection
        title={uploadSectionTitle}
        items={[<UploadButton type="preview" onClick={() => {}} />]}
      />

      <UploadSection title={draftSectionTitleRow} />
    </StyledPageContainer>
  );
}
