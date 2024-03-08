import Material from '../components/home/Material/index.types';
import { MaterialType } from '../store/useMaterialStore';
import { HTTP_HEADERS, HTTP_METHODS } from './constants';
import { RetryPayload, fetchWithTokenRetry } from './member';

const ASSIGNMENT_API_COMMON_SEGMENT = '/assignment';

const ASSIGNMENT_API_SEGMENTS = {
  UPLOAD: '/assignment/upload',
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
    subjectName,
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
  formData.append('subjectName', subjectName);
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

export default sendFile;
