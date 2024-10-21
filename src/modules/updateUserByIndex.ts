import http from 'node:http';
import handleRequestBody from '../utils/handleRequestBody';
import checkValidUserData from '../utils/checkValidUserData';
import { errObj, headerTypeJson, StatusCode } from '../utils/responseHelpers';
import db from './db';

const updateUserByIndex = async (
  req: http.IncomingMessage,
  res: http.ServerResponse,
  index: number
) => {
  const body = await handleRequestBody(req);

  const user = checkValidUserData(body);

  if (!user) {
    res.writeHead(StatusCode.BadRequest, headerTypeJson);
    res.end(JSON.stringify(errObj.invalidData));
    return;
  }

  const userId = db[index].id;

  db[index] = { id: userId, ...user };

  res.writeHead(StatusCode.Success, headerTypeJson);
  res.end(JSON.stringify(db[index]));
};

export default updateUserByIndex;
