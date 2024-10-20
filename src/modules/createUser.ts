import http from 'node:http';
import { errObj, headerTypeJson, StatusCode } from '../utils/responseHelpers';
import db from './db';
import { User, UserWithId } from '../utils/interfaces';
import { v4 as uuidv4 } from 'uuid';
import handleRequestBody from '../utils/handleRequestBody';
import checkValidUserData from '../utils/checkValidUserData';

const addUserToDB = (user: User): UserWithId => {
  const newUser = { id: uuidv4(), ...user };
  db.push(newUser);
  return newUser;
};

export const handleCreateUser = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  try {
    const body = await handleRequestBody(req);

    const user = checkValidUserData(body);

    if (!user) {
      res.writeHead(StatusCode.BadRequest, headerTypeJson);
      res.end(JSON.stringify(errObj.invalidData));
      return;
    }

    const addedUser = addUserToDB(user);

    res.writeHead(StatusCode.Created, headerTypeJson);

    res.end(JSON.stringify(addedUser));
  } catch (error) {
    res.writeHead(StatusCode.InternalServerError, headerTypeJson);

    res.end(JSON.stringify(errObj.internalServerError));
  }
};
