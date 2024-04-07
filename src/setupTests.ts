import '@testing-library/jest-dom';
import { server } from './mocks/node';

beforeAll(() => {
  console.log('start msw server');
  server.listen();

  console.log('mock HTMLDiaglogElement');
  HTMLDialogElement.prototype.show = jest.fn();
  HTMLDialogElement.prototype.showModal = jest.fn();
  HTMLDialogElement.prototype.close = jest.fn();
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  console.log('end msw server');
  server.close();
});
