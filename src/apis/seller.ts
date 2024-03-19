import fetchWithEnvironment from '.';
import Material from '../components/home/Material/index.types';
import { MaterialType } from '../store/useMaterialStore';
import { HTTP_HEADERS, HTTP_METHODS } from './constants';
import { RetryPayload, fetchWithTokenRetry } from './member';

const SELLER_API_COMMON_SEGMENT = '/seller';

const ASSIGNMENT_API_SEGMENTS = {
  PROFILE: '/seller/profile',
  ASSIGNMENT: '/seller/assignment',
};

export const getSellerProfile = async (sellerId: number) => {
  const searchParams = new URLSearchParams({
    memberId: sellerId.toString(),
  });
  return fetchWithEnvironment(
    `${process.env.REACT_APP_API_URL}${ASSIGNMENT_API_SEGMENTS.PROFILE}?${searchParams}`,
  ).then((response) => response.json());
};

export const getSellerMaterial = async (
  nickName: string,
  page: number,
  size: number,
) => {
  const searchParams = new URLSearchParams({
    nickName,
    page: page.toString(),
    size: size.toString(),
  });

  return fetchWithEnvironment(
    `${process.env.REACT_APP_API_URL}${ASSIGNMENT_API_SEGMENTS.ASSIGNMENT}?${searchParams}`,
  ).then((response) => response.json());
};
