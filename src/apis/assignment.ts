import Material from '../components/home/Material/index.types';
import { MaterialType } from '../store/useMaterialStore';
import { HTTP_HEADERS, HTTP_METHODS } from './constants';
import { RetryPayload, fetchWithTokenRetry } from './member';

const ASSIGNMENT_API_COMMON_SEGMENT = '/assignment';

const ASSIGNMENT_API_SEGMENTS = {
  UPLOAD: '/assignment/upload',
  DOWNLOAD: '/assignment/download',
  CHECK_PHONE_NUMBER_SUBMITTED: '/member/phone-number',
};

const sendFile = async (
  file: File,
  material: MaterialType,
  accessToken: string,
  retryPayload: RetryPayload,
) => {
  const {
    title,
    major,
    semester,
    className,
    professor,
    grade,
    fullScore,
    score,
    description,
  } = material;
  const formData = new FormData();
  formData.append('file', file, file.name);
  formData.append('title', title);
  formData.append('major', major);
  formData.append('semester', semester);
  formData.append('className', className);
  formData.append('professor', professor);
  formData.append('grade', grade);
  formData.append('fullScore', String(fullScore));
  formData.append('score', String(score));
  formData.append('description', description);

  return fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${ASSIGNMENT_API_SEGMENTS.UPLOAD}`,
    {
      method: HTTP_METHODS.PUT,
      headers: {
        [HTTP_HEADERS.AUTHORIZATION]: `Bearer ${accessToken}`,
      },
      body: formData,
    },
    retryPayload,
  );
};

export const downloadFile = async (
  materialId: number,
  authStore: string,
  retrypayload: RetryPayload,
) => {
  if (authStore && retrypayload) {
    const requestOptions = {
      headers: { Authorization: `Bearer ${authStore}` },
    };

    const data = await fetchWithTokenRetry(
      `${process.env.REACT_APP_API_URL}${ASSIGNMENT_API_SEGMENTS.DOWNLOAD}/${materialId}`,
      requestOptions,
      retrypayload,
    );

    return data;
  }

  return null;
};

export const checkIsPhoneNumberSubmitted = async (
  accessToken: string,
  retrypayload: RetryPayload,
) => {
  const requestOptions = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${ASSIGNMENT_API_SEGMENTS.CHECK_PHONE_NUMBER_SUBMITTED}`,
    requestOptions,
    retrypayload,
  );
  return data;
};

export default sendFile;
