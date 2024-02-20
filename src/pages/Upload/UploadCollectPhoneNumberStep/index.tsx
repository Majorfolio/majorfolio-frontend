import React from 'react';
import Description, {
  ExpandedDescription,
} from '../../../components/common/Description';
import TextField from '../../../components/common/TextField';
import useText from '../../../hooks/common/useText';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import StyledItemRow from './index.styles';

export default function UploadCollectPhoneNumberStep() {
  const description = (
    <ExpandedDescription
      normalText="자료 업로드를 위해"
      boldText="전화번호를 입력해주세요"
    />
  );
  const { phoneNumber, onPhoneNumberChange } = useText('phoneNumber');
  const phoneField = (
    <TextField
      type="text"
      placeholder="전화번호 (-없이)"
      text={phoneNumber}
      onTextChange={onPhoneNumberChange}
    />
  );

  const saveButton = (
    <Button type="button" category="primary" onClick={() => {}}>
      <Text size={16} weight="bold" lineHeight="sm">
        저장하기
      </Text>
    </Button>
  );

  // TODO resize margin between StyledItemRow
  return (
    <>
      {description}
      <StyledItemRow>{phoneField}</StyledItemRow>
      <StyledItemRow>{saveButton}</StyledItemRow>
    </>
  );
}
