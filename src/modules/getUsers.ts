import http from 'node:http';
import { headerTypeJson, StatusCode } from '../utils/responseHelpers';
import db from './db';

const getUsers = (res: http.ServerResponse) => {
  res.writeHead(StatusCode.Success, headerTypeJson);
  res.end(JSON.stringify(db));
};

export default getUsers;
