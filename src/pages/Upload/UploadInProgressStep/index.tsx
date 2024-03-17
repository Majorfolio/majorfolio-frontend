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
import sendFile, {
  checkIsPhoneNumberSubmitted,
} from '../../../apis/assignment';
import useAuthStore from '../../../store/useAuthStore';
import useModal from '../../../hooks/common/useModal';
import Modal from '../../../components/common/Modal';
import { useNextStep } from '..';
import UploadRoutes from '../../index.types';
import useRefreshPayload from '../../../hooks/common/useRefreshPayload';
import useMyProfile from '../../My/MyMain/useMyProfile';
import {
  CancelDefaultIcon,
  CloseDefaultIcon,
  ErrorDefaultIcon,
} from '../../../assets/icons';
import Row from '../../../components/common/Row';
import useFormSubmission from '../../../hooks/common/useFormSubmission';
import useDraftStore from '../../../store/useDraftStore';
import { Dropdown } from '../../../components/common/Dropdown';
import Column from '../../../components/common/Column';

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
    className,
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

  const { univ } = useMyProfile();

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
  const [hasClassNameError, setHasClassNameError] = useState<boolean>(false);
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

    const currentHasFileError = !file;
    const currentHasTitleError = title.length < 2 || title.length >= 30;
    const currentHasMajorError = major.length < 2 || major.length >= 30;
    const currentHasSemesterError =
      semester.length < 2 || semester.length >= 30;
    const currentHasClassNameError =
      className.length < 2 || className.length >= 30;
    const currentHasProfessorError =
      professor.length < 2 || professor.length >= 30;
    const currentHasGradeError = !grade || !GRADES.includes(grade);
    const currentHasScoreError =
      !score || Number(score) > Number(fullScore) || Number(score) < 0;
    const currentHasFullScoreError =
      !fullScore || Number(score) > Number(fullScore) || Number(fullScore) < 0;
    const currentHasDescriptionError =
      description.length === 0 || description.length > 80;

    setHasTitleError(currentHasTitleError);
    setHasMajorError(currentHasMajorError);
    setHasSemesterError(currentHasSemesterError);
    setHasClassNameError(currentHasClassNameError);

    setHasProfessorError(currentHasProfessorError);
    setHasGradeError(currentHasGradeError);
    setHasScoreError(currentHasScoreError);
    setHasFullScoreError(currentHasFullScoreError);

    setHasDescriptionError(currentHasDescriptionError);

    return !(
      currentHasFileError ||
      currentHasTitleError ||
      currentHasClassNameError ||
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
    if (firstFile) {
      updateDraft({ file: firstFile });
    }
  };

  const uploadFile = async () => {
    if (!file) return false;
    const { code, result } = await sendFile(
      file,
      {
        title,
        major,
        semester,
        className,
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
        secondaryAction: () => {},
      });
      return false;
    }
    return false;
  };

  const { isSubmitting, handleSubmit } = useFormSubmission(async () => {
    const areFieldValid = validateFields();
    if (areFieldValid) {
      const { code, result } = await checkIsPhoneNumberSubmitted(
        accessToken,
        refreshPayload,
      );
      if (result) {
        navigateToNextStep();
      } else {
        activateModal('REQUIRE_PHONE_NUMBER', {
          primaryAction: () => navigate(`../${UploadRoutes.PhoneNumber}`),
          secondaryAction: () => {},
        });
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
  console.log(hasError);

  const fileSectionTitle = (
    <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
      파일
    </Text>
  );

  const fileSectionItem = (
    <UploadItemWrapper>
      <UploadButton type="action" onChange={selectFile} file={file} />
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
    <Column gap={4}>
      <TextField
        id="title"
        type="text"
        placeholder="자료 제목 (필수)"
        text={title}
        onTextChange={(event) => {
          if (event.target.value.length <= 15) {
            updateDraft({ title: event.target.value });
            setHasTitleError(false);
          }
        }}
        hasError={hasTitleError}
        icon={
          hasTitleError ? (
            <ErrorDefaultIcon />
          ) : (
            <button
              aria-label="remove-all"
              type="button"
              onClick={() => {
                updateDraft({ title: '' });
                setHasTitleError(false);
              }}
            >
              <CancelDefaultIcon />
            </button>
          )
        }
      />
      {hasTitleError && (
        <HelperText type="error">입력한 정보를 확인해주세요.</HelperText>
      )}
    </Column>
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
        placeholder={univ}
        text=""
        onTextChange={() => {}}
        disabled
      />
      <Column gap={4}>
        <TextField
          id="title"
          type="text"
          placeholder="학과 (필수)"
          text={major}
          onTextChange={(event) => {
            if (event.target.value.length <= 15) {
              updateDraft({ major: event.target.value });
              setHasMajorError(false);
            }
          }}
          hasError={hasMajorError}
          icon={
            hasMajorError ? (
              <ErrorDefaultIcon />
            ) : (
              <button
                aria-label="remove-all"
                type="button"
                onClick={() => {
                  updateDraft({ major: '' });
                  setHasMajorError(false);
                }}
              >
                <CancelDefaultIcon />
              </button>
            )
          }
        />
        {hasMajorError && (
          <HelperText type="error">입력한 정보를 확인해주세요.</HelperText>
        )}
      </Column>
      <Column gap={4}>
        <Dropdown
          hasError={hasSemesterError}
          category="학기 (필수)"
          options={[
            '23-2',
            '23-1',
            '22-2',
            '22-1',
            '21-2',
            '21-1',
            '20-2',
            '20-1',
            '19-2',
            '19-1',
            '18-2',
            '18-1',
            '17-2',
            '17-1',
            '16-2',
            '16-1',
            '15-2',
            '15-1',
            '14-2',
            '14-1',
          ]}
          searchQuery={semester}
          onSearchQueryUpdate={(newSemester) => {
            updateDraft({ semester: newSemester });
            setHasSemesterError(false);
          }}
          icon={
            hasSemesterError ? (
              <ErrorDefaultIcon />
            ) : (
              <button
                aria-label="remove-all"
                type="button"
                onClick={() => {
                  updateDraft({ semester: '' });
                  setHasSemesterError(false);
                }}
              >
                <CancelDefaultIcon />
              </button>
            )
          }
        />
        {hasSemesterError && (
          <HelperText type="error">입력한 정보를 확인해주세요.</HelperText>
        )}
      </Column>
      <Column gap={4}>
        <TextField
          id="title"
          type="text"
          placeholder="수업명 (필수)"
          text={className}
          onTextChange={(event) => {
            if (event.target.value.length <= 15) {
              updateDraft({ className: event.target.value });
              setHasClassNameError(false);
            }
          }}
          hasError={hasClassNameError}
          icon={
            hasClassNameError ? (
              <ErrorDefaultIcon />
            ) : (
              <button
                aria-label="remove-all"
                type="button"
                onClick={() => {
                  updateDraft({ className: '' });
                  setHasClassNameError(false);
                }}
              >
                <CancelDefaultIcon />
              </button>
            )
          }
        />
        {hasClassNameError && (
          <HelperText type="error">입력한 정보를 확인해주세요.</HelperText>
        )}
      </Column>
      <Column gap={4}>
        <TextField
          id="title"
          type="text"
          placeholder="교수명 (선택)"
          text={professor}
          onTextChange={(event) => {
            if (event.target.value.length <= 15) {
              updateDraft({ professor: event.target.value });
              setHasProfessorError(false);
            }
          }}
          hasError={hasProfessorError}
          icon={
            hasProfessorError ? (
              <ErrorDefaultIcon />
            ) : (
              <button
                aria-label="remove-all"
                type="button"
                onClick={() => {
                  updateDraft({ professor: '' });
                  setHasProfessorError(false);
                }}
              >
                <CancelDefaultIcon />
              </button>
            )
          }
        />
        {hasProfessorError && (
          <HelperText type="error">입력한 정보를 확인해주세요.</HelperText>
        )}
      </Column>
      <Column gap={4}>
        <Dropdown
          hasError={hasScoreError}
          category="학점(필수)"
          options={[
            'A+',
            'A',
            'A-',
            'B+',
            'B',
            'B-',
            'C+',
            'C',
            'C-',
            'D',
            'F',
            'NP',
            'P',
          ]}
          searchQuery={grade}
          onSearchQueryUpdate={(newGrade) => {
            updateDraft({ grade: newGrade });
            setHasGradeError(false);
          }}
          icon={
            hasScoreError ? (
              <ErrorDefaultIcon />
            ) : (
              <button
                aria-label="remove-all"
                type="button"
                onClick={() => {
                  updateDraft({ grade: '' });
                  setHasGradeError(false);
                }}
              >
                <CancelDefaultIcon />
              </button>
            )
          }
        />
        {hasGradeError && (
          <HelperText type="error">입력한 정보를 확인해주세요.</HelperText>
        )}
      </Column>
      <ScoreRow>
        <Column gap={4}>
          <TextField
            id="title"
            type="number"
            placeholder="과제점수 (필수)"
            text={score}
            onTextChange={(event) => {
              updateDraft({ score: event.target.value });
              setHasScoreError(false);
            }}
            hasError={hasScoreError}
            icon={
              hasScoreError ? (
                <ErrorDefaultIcon />
              ) : (
                <button
                  aria-label="remove-all"
                  type="button"
                  onClick={() => {
                    updateDraft({ score: '' });
                    setHasScoreError(false);
                  }}
                >
                  <CancelDefaultIcon />
                </button>
              )
            }
          />
          {hasScoreError && (
            <HelperText type="error">입력한 정보를 확인해주세요.</HelperText>
          )}
        </Column>
        <Column gap={4}>
          <TextField
            id="title"
            type="number"
            placeholder="만점 (필수)"
            text={fullScore}
            onTextChange={(event) => {
              updateDraft({ fullScore: event.target.value });
              setHasFullScoreError(false);
            }}
            hasError={hasFullScoreError}
            icon={
              hasFullScoreError ? (
                <ErrorDefaultIcon />
              ) : (
                <button
                  aria-label="remove-all"
                  type="button"
                  onClick={() => {
                    updateDraft({ fullScore: '' });
                    setHasFullScoreError(false);
                  }}
                >
                  <CancelDefaultIcon />
                </button>
              )
            }
          />
          {hasFullScoreError && (
            <HelperText type="error">입력한 정보를 확인해주세요.</HelperText>
          )}
        </Column>
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
      <Column gap={4}>
        <Textbox
          id="title"
          placeholder="자료 설명"
          text={description}
          onTextChange={(event) => {
            if (event.target.value.length <= 80) {
              updateDraft({ description: event.target.value });
              setHasDescriptionError(false);
            }
          }}
          icon={
            hasDescriptionError ? (
              <ErrorDefaultIcon />
            ) : (
              <button
                aria-label="remove-all"
                type="button"
                onClick={() => {
                  updateDraft({ description: '' });
                  setHasDescriptionError(false);
                }}
              >
                <CancelDefaultIcon />
              </button>
            )
          }
          hasError={hasDescriptionError}
        />
        {hasDescriptionError ? (
          <HelperText type="error">입력한 정보를 확인해주세요.</HelperText>
        ) : (
          <HelperText type="info">80자 이내로 작성해주세요.</HelperText>
        )}
      </Column>
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
