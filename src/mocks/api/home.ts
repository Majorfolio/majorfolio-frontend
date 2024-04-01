import { rest } from 'msw';
import { materialsByCategory } from './data/homeData';

const materialHandler = [
  rest.get(`${process.env.REACT_APP_API_URL}/home/all/univ`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(materialsByCategory));
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/home/my/univ`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(materialsByCategory));
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/home/my/major`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(materialsByCategory));
  }),
];

export default materialHandler;
