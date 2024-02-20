import React, { ChangeEvent, useState } from 'react';
import Description from '../../../components/common/Description';
import UploadSection from '../../../components/common/UploadSection';
import Text from '../../../components/common/Text';
import UploadButton from '../../../components/common/UploadButton';
import HelperText from '../../../components/common/HelperText';
import { HelperTextWrapper, UploadItemWrapper } from '../index.styles';
import TextField from '../../../components/common/TextField';
import useMaterial from './useMaterial';
import Textbox from '../../../components/common/Textbox';
import ScoreRow, {
  SomeContainer,
  StyledDescriptionSectionItem,
} from './index.styles';
import BottomButtonBar from '../../../components/common/BottomButtonBar';
import { PageContainer } from '../../Home/index.styles';
import uploadFile from '../../../apis/assignment';
import useAuthStore from '../../../store/authStore';
import useMaterialStore from '../../../store/materialStore';

interface IFile {
  url: string;
  name: string;
}

interface UploadInProgressStepType {
  onNext: () => void;
}

export default function UploadInProgresStep({
  onNext,
}: UploadInProgressStepType) {
  const {
    titleState,
    majorState,
    semesterState,
    subjectNameState,
    professorState,
    gradeState,
    fullScoreState,
    scoreState,
    descriptionState,
  } = useMaterial();

  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const accessToken = useAuthStore((state) => state.accessToken)!;

  const onFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setCurrentFile(selectedFiles?.[0]);
  };

  const onFileUpload = async () => {
    if (!currentFile) return;

    const response = await uploadFile(
      currentFile,
      {
        title: titleState.title,
        major: majorState.major,
        semester: semesterState.semester,
        subjectName: subjectNameState.subjectName,
        professor: professorState.professor,
        grade: gradeState.grade,
        fullScore: Number(fullScoreState.fullScore),
        score: Number(scoreState.score),
        description: descriptionState.description,
      },
      accessToken,
    );

    const data = response.json();
  };

  const fileSectionTitle = (
    <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
      파일
    </Text>
  );

  const fileSectionItem = (
    <UploadItemWrapper>
      <UploadButton type="action" onChange={onFileSelect} file={currentFile} />
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
      text={titleState.title}
      onTextChange={titleState.onTitleChange}
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
        placeholder="학과"
        text={majorState.major}
        onTextChange={majorState.onMajorChange}
      />
      <TextField
        id="title"
        type="text"
        placeholder="시기"
        text={semesterState.semester}
        onTextChange={semesterState.onSemesterChange}
      />
      <TextField
        id="title"
        type="text"
        placeholder="수업명"
        text={subjectNameState.subjectName}
        onTextChange={subjectNameState.onSubjectNameChange}
      />
      <TextField
        id="title"
        type="text"
        placeholder="교수명"
        text={professorState.professor}
        onTextChange={professorState.onProfessorChange}
      />
      <TextField
        id="title"
        type="text"
        placeholder="학점"
        text={gradeState.grade}
        onTextChange={gradeState.onGradeChange}
      />
      <ScoreRow>
        <TextField
          id="title"
          type="number"
          placeholder="과제점수"
          text={scoreState.score}
          onTextChange={scoreState.onScoreChange}
        />
        <TextField
          id="title"
          type="number"
          placeholder="만점"
          text={fullScoreState.fullScore}
          onTextChange={fullScoreState.onFullScoreChange}
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
        text={descriptionState.description}
        onTextChange={descriptionState.onDescriptionChange}
      />
      <HelperText type="info">80자 이내로 작성해주세요.</HelperText>
    </StyledDescriptionSectionItem>
  );

  const transitions = [
    { text: '임시 저장', onAction: () => {} },
    {
      text: '업로드하기',
      onAction: async () => {
        // TODO upload file when user consents to the terms and conditions
        await onFileUpload();
        onNext();
      },
    },
  ];

  return (
    <PageContainer>
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
      </SomeContainer>
      <BottomButtonBar transitions={transitions} />
    </PageContainer>
  );
}
