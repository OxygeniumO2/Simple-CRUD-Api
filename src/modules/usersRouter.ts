import http from 'node:http';
import { handleCreateUser } from './createUser';
import { errObj, headerTypeJson, StatusCode } from '../utils/responseHelpers';
import getUsers from './getUsers';
import { Method } from '../utils/requestHelpers';

const usersRouter = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const { method } = req;

  try {
    switch (method) {
      case Method.GET:
        getUsers(res);
        break;
      case Method.POST:
        await handleCreateUser(req, res);
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

export default usersRouter;
