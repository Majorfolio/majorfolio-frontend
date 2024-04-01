import { rest } from 'msw';
import phoneNumberSubmissionData, {
  deleteAccountData,
} from './data/memberData';

const memberHandler = [
  rest.post(
    `${process.env.REACT_APP_API_URL}/member/phone-number`,
    (_, res, ctx) => {
      console.log('msw invoked: /member/phone-number');
      return res(ctx.status(200), ctx.json(phoneNumberSubmissionData));
    },
  ),

  rest.post(`${process.env.REACT_APP_API_URL}/member/delete`, (_, res, ctx) => {
    console.log('msw invoked: /member/delete');
    return res(ctx.status(200), ctx.json(deleteAccountData));
  }),
];

export default memberHandler;
