import { rest } from 'msw';
import phoneNumberSubmissionData, {
  deleteAccountData,
  myProfileData,
} from './data/memberData';

const memberHandler = [
  rest.get(`/my/`, (_, res, ctx) => {
    console.log('msw invoked: GET /my/');
    return res(ctx.json(myProfileData));
  }),

  rest.post(
    `${process.env.REACT_APP_API_URL}/member/phone-number`,
    (_, res, ctx) => {
      console.log('msw invoked: POST /member/phone-number');
      return res(ctx.status(200), ctx.json(phoneNumberSubmissionData));
    },
  ),

  rest.post(`${process.env.REACT_APP_API_URL}/member/delete`, (_, res, ctx) => {
    console.log('msw invoked: POST /member/delete');
    return res(ctx.status(200), ctx.json(deleteAccountData));
  }),
];

export default memberHandler;
