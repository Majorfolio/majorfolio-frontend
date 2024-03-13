import React from 'react';
import Text from '../../../components/common/Text';
import StyledPageContainer, {
  StyledDraftEditButton,
  StyledDraftSectionTitleRow,
  StyledDraftText,
} from './index.styles';
import UploadButton from '../../../components/common/UploadButton';
import UploadSection from '../../../components/common/UploadSection';
import Button from '../../../components/common/Button';
import { useNextStep } from '..';
import EmptyMaterialWrapper from '../../../components/common/EmptyContentWrapper';

export default function UploadDefaultStep() {
  const { navigateToNextStep } = useNextStep();
  const uploadSectionTitle = (
    <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
      새로 업로드
    </Text>
  );

  const hasDraft = false;

  const draftSectionTitleRow = (
    <StyledDraftSectionTitleRow>
      <StyledDraftText
        color="gray/gray900"
        size={16}
        weight="bold"
        lineHeight="sm"
      >
        임시 저장함
      </StyledDraftText>
      {hasDraft && (
        <StyledDraftEditButton type="button" disabled>
          <Text color="gray/gray500" size={14} lineHeight="sm">
            편집
          </Text>
        </StyledDraftEditButton>
      )}
    </StyledDraftSectionTitleRow>
  );

  const draftSecionContent = !hasDraft && (
    <EmptyMaterialWrapper>
      <Text size={16} color="gray/gray400" lineHeight="sm">
        임시 저장한 자료가 없어요.
      </Text>
    </EmptyMaterialWrapper>
  );

  return (
    <StyledPageContainer>
      <UploadSection
        title={uploadSectionTitle}
        items={[<UploadButton type="preview" onClick={navigateToNextStep} />]}
      />

      <UploadSection title={draftSectionTitleRow} />
      {draftSecionContent}
    </StyledPageContainer>
  );
}
