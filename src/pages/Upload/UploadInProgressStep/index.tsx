import React from 'react';
import Description from '../../../components/common/Description';
import UploadSection from '../../../components/common/UploadSection';
import Text from '../../../components/common/Text';
import UploadButton from '../../../components/common/UploadButton';
import HelperText from '../../../components/common/HelperText';
import { HelperTextWrapper, UploadItemWrapper } from '../index.styles';
import TextField from '../../../components/common/TextField';

export default function UploadInProgresStep() {
  const fileSectionTitle = (
    <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
      파일
    </Text>
  );

  const fileSectionItem = (
    <UploadItemWrapper>
      <UploadButton
        type="action"
        onClick={() => {
          throw new Error('Function not implemented.');
        }}
      />
      <HelperTextWrapper>
        <HelperText>파일 업로드 시, PDF파일로 업로드해주세요.</HelperText>
      </HelperTextWrapper>
    </UploadItemWrapper>
  );

  const materialTitle = (
    <Text color="gray/gray900" size={16} weight="bold" lineHeight="sm">
      자료 제목
    </Text>
  );

  const materialInput = (
    <TextField
      id="text"
      type="text"
      placeholder=""
      text={nickname}
      onTextChange={onNicknameChange}
    />
  );

  return (
    <>
      <Description
        normalText="자세한 정보로"
        boldText="자료의 구매를 유도해보세요"
      />
      <UploadSection title={fileSectionTitle} items={[fileSectionItem]} />
    </>
  );
}
