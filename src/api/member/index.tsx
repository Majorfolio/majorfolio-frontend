const MEMBER_API_COMMON_SEGMENT = '/member';

const MEMBER_API_SEGMENTS = {
  LOGIN: '/login',
  SCHOOL_EMAIL: '/code',
  SIGNUP: '/signup',
  REMAKE_TOKEN: '/remake/token',
  CHECK_NICKNAME: '/check-nickname',
  LOGOUT: '/logout',
  DELETE: '/delete',
};

const MEMBER_API_PATHS = Object.entries(MEMBER_API_SEGMENTS).reduce(
  (accumulator, [key, value]) => {
    return {
      ...accumulator,
      [key]: `${MEMBER_API_COMMON_SEGMENT}${value}`,
    };
  },
  {},
);

export default MEMBER_API_PATHS;
