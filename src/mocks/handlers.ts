import materialHandler from './api/home';
import memberHandler from './api/member';

export const handlers = [...memberHandler, ...materialHandler];
