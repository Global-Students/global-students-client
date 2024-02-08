import { http, HttpResponse } from 'msw';
import board from './board.json';

const boardId = 123;

const handlers = [
  http.get(`boards/${boardId}`, () => HttpResponse.json(board)),
];

export default handlers;
