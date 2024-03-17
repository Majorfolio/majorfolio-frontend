import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Description, {
  ExpandedDescription,
} from '../../../components/common/Description';
import TextField from '../../../components/common/TextField';
import useText from '../../../hooks/common/useText';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import StyledItemRow from './index.styles';
import UploadRoutes from '../../index.types';
import { sendContact } from '../../../apis/member';
import useAuthStore from '../../../store/useAuthStore';
import useRefreshPayload from '../../../hooks/common/useRefreshPayload';

const validateContact = (phoneNumber: string): boolean => {
  const phoneNumberRegex = /^010[0-9]{4}[0-9]{4}$/;
  return phoneNumberRegex.test(phoneNumber);
};

export default function UploadCollectPhoneNumberStep() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const refreshPayload = useRefreshPayload();
  const onPhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const numberRegex = /^[0-9]*$/;
    if (
      numberRegex.test(event.target.value) &&
      event.target.value.length < 12
    ) {
      setPhoneNumber(event.target.value);
    }
  };

  const navigate = useNavigate();
  const accessToken = useAuthStore((state) => state.accessToken)!;

  const saveContact = async () => {
    const first = phoneNumber.slice(0, 3);
    const second = phoneNumber.slice(3, 7);
    const last = phoneNumber.slice(7);
    const { code } = await sendContact(
      `${first}-${second}-${last}`,
      accessToken,
      refreshPayload,
    );
  };

  const isContactValid = validateContact(phoneNumber);

  const description = (
    <ExpandedDescription
      normalText="자료 업로드를 위해"
      boldText="전화번호를 입력해주세요"
    />
  );

  const phoneField = (
    <TextField
      type="text"
      placeholder="전화번호 (-없이)"
      text={phoneNumber}
      onTextChange={onPhoneNumberChange}
    />
  );

  const saveButton = (
    <Button
      type="button"
      category="primary"
      onClick={async () => {
        await saveContact();
        navigate(`/upload/${UploadRoutes.Guideline}`, { replace: true });
      }}
      disabled={!isContactValid}
    >
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
