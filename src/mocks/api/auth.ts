import { rest } from 'msw';
import { memberData } from './data/authData';

const authHandler = [
  rest.get(/https:\/\/kauth.kakao.com\/oauth\/authorize/, (_, res, ctx) => {
    console.log('msw invoked: GET https://kauth.kakao.com/oauth/authorize');
    const queryParams = new URLSearchParams({
      code: '123456789',
    }).toString();
    return res(
      ctx.status(302),
      ctx.set(
        'location',
        `${process.env.REACT_APP_BASE_URL}/callback?${queryParams}`,
      ),
    );
  }),

  rest.get(/https:\/\/accounts.kakao.com\/login/, (_, res, ctx) => {
    console.log('msw invoked: GET https://accounts.kakao.com/login');
    const queryParams = new URLSearchParams({
      code: '123456789',
    }).toString();
    return res(
      ctx.status(302),
      ctx.set(
        'location',
        `${process.env.REACT_APP_BASE_URL}/callback?${queryParams}`,
      ),
    );
  }),

  rest.post(/https:\/\/kauth.kakao.com\/oauth\/token/, (_, res, ctx) => {
    console.log('msw invoked: POST https://kauth.kakao.com/oauth/token');
    return res(ctx.json({ id_token: 1233456789 }));
  }),

  rest.post(`${process.env.REACT_APP_API_URL}/member/login`, (_, res, ctx) => {
    console.log('msw invoked: POST /member/login');
    return res(ctx.json(memberData));
  }),
];

export default authHandler;
