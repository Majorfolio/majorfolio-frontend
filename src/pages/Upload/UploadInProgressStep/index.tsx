import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { useFormAction, useNavigate } from 'react-router-dom';
import Description from '../../../components/common/Description';
import UploadSection from '../../../components/common/UploadSection';
import Text from '../../../components/common/Text';
import UploadButton from '../../../components/common/UploadButton';
import HelperText from '../../../components/common/HelperText';
import { HelperTextWrapper, UploadItemWrapper } from '../index.styles';
import TextField from '../../../components/common/TextField';
import Textbox from '../../../components/common/Textbox';
import ScoreRow, {
  SomeContainer,
  StyledDescriptionSectionItem,
} from './index.styles';
import BottomButtonBar from '../../../components/common/BottomButtonBar';
import sendFile from '../../../apis/assignment';
import useAuthStore from '../../../store/useAuthStore';
import useModal from '../../../hooks/common/useModal';
import Modal from '../../../components/common/Modal';
import { useNextStep } from '..';
import UploadRoutes from '../../index.types';
import useRefreshPayload from '../../../hooks/common/useRefreshPayload';
import useMyProfile from '../../My/MyMain/useMyProfile';
import { ErrorDefaultIcon } from '../../../assets/icons';
import Row from '../../../components/common/Row';
import useFormSubmission from '../../../hooks/common/useFormSubmission';
import useDraftStore from '../../../store/useDraftStore';

interface IFile {
  url: string;
  name: string;
}

interface UploadInProgressStepType {}

export default function UploadInProgresStep() {
  const {
    file,
    title,
    major,
    semester,
    subjectName,
    professor,
    grade,
    fullScore,
    score,
    description,
    updateDraft,
    reset,
    updateDraftProp,
  } = useDraftStore((state) => state);

  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const accessToken = useAuthStore((state) => state.accessToken)!;

  const { univName } = useMyProfile();

  const navigate = useNavigate();
  const { navigateToNextStep } = useNextStep();

  const {
    modalRef,
    category,
    activateModal,
    closePrimarily,
    closeSecondarily,
  } = useModal();

  const refreshPayload = useRefreshPayload();

  const [hasTitleError, setHasTitleError] = useState<boolean>(false);
  const [hasMajorError, setHasMajorError] = useState<boolean>(false);
  const [hasSemesterError, setHasSemesterError] = useState<boolean>(false);
  const [hasSubjectNameError, setHasSubjectNameError] =
    useState<boolean>(false);
  const [hasProfessorError, setHasProfessorError] = useState<boolean>(false);
  const [hasGradeError, setHasGradeError] = useState<boolean>(false);
  const [hasFullScoreError, setHasFullScoreError] = useState<boolean>(false);
  const [hasScoreError, setHasScoreError] = useState<boolean>(false);
  const [hasDescriptionError, setHasDescriptionError] =
    useState<boolean>(false);

  const validateFields = () => {
    const GRADES = [
      'A+',
      'A',
      'A-',
      'B+',
      'B',
      'B-',
      'C+',
      'C',
      'C-',
      'D+',
      'D',
      'D-',
      'F',
      'P',
      'NP',
    ];

    const currentHasFileError = !currentFile;
    const currentHasTitleError = title.length < 2 || title.length >= 30;
    const currentHasMajorError = major.length < 2 || major.length >= 30;
    const currentHasSemesterError =
      semester.length < 2 || semester.length >= 30;
    const currentHasSubjectNameError =
      subjectName.length < 2 || subjectName.length >= 30;
    const currentHasProfessorError =
      professor.length < 2 || professor.length >= 30;
    const currentHasGradeError = !grade && !GRADES.includes(grade);
    const currentHasScoreError =
      !!score || Number(score) < Number(fullScore) || Number(score) < 0;
    const currentHasFullScoreError =
      !!fullScore || Number(score) < Number(fullScore) || Number(fullScore) < 0;
    const currentHasDescriptionError =
      description.length === 0 || description.length > 80;

    setHasTitleError(currentHasTitleError);
    setHasMajorError(currentHasMajorError);
    setHasSemesterError(currentHasSemesterError);
    setHasSubjectNameError(currentHasSubjectNameError);

    setHasProfessorError(currentHasProfessorError);
    setHasGradeError(currentHasGradeError);
    setHasScoreError(currentHasScoreError);
    setHasFullScoreError(currentHasFullScoreError);

    setHasDescriptionError(currentHasDescriptionError);

    return !(
      currentHasFileError ||
      currentHasTitleError ||
      currentHasSubjectNameError ||
      currentHasSemesterError ||
      currentHasScoreError ||
      currentHasProfessorError ||
      currentHasMajorError ||
      currentHasGradeError ||
      currentHasFullScoreError ||
      currentHasDescriptionError
    );
  };

  const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    const firstFile = selectedFiles?.[0];

    // TODO validate file based on server-side validation, or by reading the file content
    // TODO upload mock file upload to see if it works, when browser doesn't act default
    if (firstFile.type !== 'application/pdf') {
      activateModal('FEEDBACK_INVALID_FORMAT', {
        primaryAction: () => {},
      });
      return;
    }
    setCurrentFile(firstFile);
    updateDraft({ file: firstFile || null });
  };

  const uploadFile = async () => {
    if (!currentFile) return false;
    const { code, result } = await sendFile(
      currentFile,
      {
        title,
        major,
        semester,
        subjectName,
        professor,
        grade,
        fullScore: Number(fullScore),
        score: Number(score),
        description,
      },
      accessToken,
      refreshPayload,
    );

    if (code === 1000) {
      reset();
      return true;
    }

    if (code === 10012) {
      activateModal('REQUIRE_PHONE_NUMBER', {
        primaryAction: () => navigate(`../${UploadRoutes.PhoneNumber}`),
        secondaryAction: () => navigate(-1),
      });
      return false;
    }
    return false;
  };

  const { isSubmitting, handleSubmit } = useFormSubmission(async () => {
    const areFieldValid = validateFields();
    if (areFieldValid) {
      const isUploadSuccessful = await uploadFile();
      if (isUploadSuccessful) {
        navigateToNextStep();
      }
    }
  });

  const hasError =
    hasTitleError ||
    hasMajorError ||
    hasSemesterError ||
    hasProfessorError ||
    hasGradeError ||
    hasFullScoreError ||
    hasScoreError ||
    hasDescriptionError;

  const fileSectionTitle = (
    <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
      파일
    </Text>
  );

  const fileSectionItem = (
    <UploadItemWrapper>
      <UploadButton type="action" onChange={selectFile} file={currentFile} />
      <HelperTextWrapper>
        <HelperText>파일 업로드 시, PDF파일로 업로드해주세요.</HelperText>
      </HelperTextWrapper>
    </UploadItemWrapper>
  );

  const titleSectionTitle = (
    <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
      자료 제목
    </Text>
  );

  const titleSectionItem = (
    <TextField
      id="title"
      type="text"
      placeholder="자료 제목 (필수)"
      text={title}
      onTextChange={(event) => updateDraft({ title: event.target.value })}
      hasError={hasTitleError}
      icon={hasTitleError ? <ErrorDefaultIcon /> : <span />}
    />
  );

  const otherSectionTitle = (
    <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
      기타 내용
    </Text>
  );

  const otherSectionItem = (
    <>
      <TextField
        id="title"
        type="text"
        placeholder={univName}
        text=""
        onTextChange={() => {}}
        disabled
      />
      <TextField
        id="title"
        type="text"
        placeholder="학과 (필수)"
        text={major}
        onTextChange={(event) => updateDraft({ major: event.target.value })}
        hasError={hasMajorError}
        icon={hasMajorError ? <ErrorDefaultIcon /> : <span />}
      />
      <TextField
        id="title"
        type="text"
        placeholder="시기 (필수)"
        text={semester}
        onTextChange={(event) => updateDraft({ semester: event.target.value })}
        hasError={hasSemesterError}
        icon={hasSemesterError ? <ErrorDefaultIcon /> : <span />}
      />
      <TextField
        id="title"
        type="text"
        placeholder="수업명 (필수)"
        text={subjectName}
        onTextChange={(event) =>
          updateDraft({ subjectName: event.target.value })
        }
        hasError={hasSubjectNameError}
        icon={hasSubjectNameError ? <ErrorDefaultIcon /> : <span />}
      />
      <TextField
        id="title"
        type="text"
        placeholder="교수명 (선택)"
        text={professor}
        onTextChange={(event) => updateDraft({ professor: event.target.value })}
        hasError={hasProfessorError}
        icon={hasProfessorError ? <ErrorDefaultIcon /> : <span />}
      />
      <TextField
        id="title"
        type="text"
        placeholder="학점 (선택)"
        text={grade}
        onTextChange={(event) => updateDraft({ grade: event.target.value })}
        hasError={hasGradeError}
        icon={hasGradeError ? <ErrorDefaultIcon /> : <span />}
      />
      <ScoreRow>
        <TextField
          id="title"
          type="number"
          placeholder="과제점수 (선택)"
          text={score}
          onTextChange={(event) => updateDraft({ score: event.target.value })}
          hasError={hasScoreError}
          icon={hasScoreError ? <ErrorDefaultIcon /> : <span />}
        />
        <TextField
          id="title"
          type="number"
          placeholder="만점 (선택)"
          text={fullScore}
          onTextChange={(event) =>
            updateDraft({ fullScore: event.target.value })
          }
          hasError={hasFullScoreError}
          icon={hasFullScoreError ? <ErrorDefaultIcon /> : <span />}
        />
      </ScoreRow>
    </>
  );

  const descriptionSectionTitle = (
    <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
      자료 설명
    </Text>
  );

  const descriptionSectionItem = (
    <StyledDescriptionSectionItem>
      <Textbox
        id="title"
        placeholder="자료 설명"
        text={description}
        onTextChange={(event) =>
          updateDraft({ description: event.target.value })
        }
        icon={hasDescriptionError ? <ErrorDefaultIcon /> : <span />}
        hasError={hasDescriptionError}
      />
      <HelperText type="info">80자 이내로 작성해주세요.</HelperText>
    </StyledDescriptionSectionItem>
  );

  const transitions = [
    {
      text: '임시 저장',
      onAction: () =>
        activateModal('TO_BE_UPDATED', { primaryAction: () => {} }),
    },
    {
      text: '업로드하기',
      onAction: handleSubmit,
      disabled: hasError || isSubmitting,
    },
  ];

  return (
    <>
      <SomeContainer>
        <Description
          normalText="자세한 정보로"
          boldText="자료의 구매를 유도해보세요"
        />
        <UploadSection title={fileSectionTitle} items={[fileSectionItem]} />
        <UploadSection title={titleSectionTitle} items={[titleSectionItem]} />
        <UploadSection title={otherSectionTitle} items={[otherSectionItem]} />
        <UploadSection
          title={descriptionSectionTitle}
          items={[descriptionSectionItem]}
        />
        <BottomButtonBar transitions={transitions} />
      </SomeContainer>

      <Modal
        modalRef={modalRef}
        category={category}
        onPrimaryAction={closePrimarily}
        onSecondaryAction={closeSecondarily}
      />
    </>
  );
}
