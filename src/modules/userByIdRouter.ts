import http from 'node:http';
import { handleCreateUser } from './createUser';
import { errObj, headerTypeJson, StatusCode } from '../utils/responseHelpers';
import getUser from './getUser';
import { validate as uuidValidate } from 'uuid';
import findUserById from './findUserById';
import { Method } from '../utils/requestHelpers';

const usersByIdRouter = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const { method, url } = req;

  const userId = url?.split('/')[3] as string;

  if (!uuidValidate(userId)) {
    res.writeHead(StatusCode.BadRequest, headerTypeJson);
    res.end(JSON.stringify(errObj.invalidIdFormat));
    return;
  }

  const isUserExist = findUserById(userId);

  if (!isUserExist) {
    res.writeHead(StatusCode.NotFound, headerTypeJson);
    res.end(JSON.stringify(errObj.userNotFound));
    return;
  }

  const [user, index] = isUserExist;

  try {
    switch (method) {
      case Method.GET:
        getUser(res, user);
        break;
      default:
        res.writeHead(StatusCode.NotFound, headerTypeJson);
        res.end(JSON.stringify(errObj.invalidMethod));
        return;
    }
  } catch (error) {
    res.writeHead(StatusCode.InternalServerError, headerTypeJson);
    res.end(JSON.stringify(errObj.internalServerError));
  }
};

export default usersByIdRouter;
