import http from 'node:http';
import { headerTypeJson, StatusCode } from '../utils/responseHelpers';
import { User } from '../utils/interfaces';

const getUser = (res: http.ServerResponse, user: User) => {
  res.writeHead(StatusCode.Success, headerTypeJson);
  res.end(JSON.stringify(user));
};

export default getUser;
