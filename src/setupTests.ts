import '@testing-library/jest-dom';
import { server } from './mocks/node';

beforeAll(() => {
  console.log('start msw server');
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  console.log('end msw server');
  server.close();
});
