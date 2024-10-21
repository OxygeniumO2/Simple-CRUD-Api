import { headerTypeJson, StatusCode } from '../utils/responseHelpers';
import db from './db';
import http from 'node:http';

const deleteUserByIndex = (res: http.ServerResponse, index: number): void => {
  db.splice(index, 1);
  res.writeHead(StatusCode.NoContent, headerTypeJson);
  res.end();
};

export default deleteUserByIndex;
