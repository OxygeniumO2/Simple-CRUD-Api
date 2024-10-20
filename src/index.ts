import 'dotenv/config';
import http from 'node:http';
import { errObj, headerTypeJson, StatusCode } from './utils/responseHelpers';
import { EndPoints } from './utils/requestHelpers';
import usersRouter from './modules/usersRouter';
import usersByIdRouter from './modules/userByIdRouter';

const PORT = process.env.SERVER_PORT;

const server = http.createServer();

server.on('request', async (req, res) => {
  const { url } = req;

  if (url !== EndPoints.Users && !url?.startsWith(EndPoints.UserById)) {
    res.writeHead(StatusCode.BadRequest, headerTypeJson);
    res.end(JSON.stringify(errObj.invalidEndpoint));
    return;
  }

  // try {
  //   switch (method) {
  //     case 'GET':
  //       testFunc(req, res);
  //       break;
  //     case 'POST':
  //       await handleCreateUser(req, res);
  //       break;
  //     case 'PUT':
  //       break;
  //     case 'DELETE':
  //       break;
  //     default:
  //       res.writeHead(StatusCode.NotFound, headerTypeJson);
  //       res.end(JSON.stringify(errObj.invalidMethod));
  //       return;
  //   }
  // } catch (error) {
  //   res.writeHead(StatusCode.InternalServerError, headerTypeJson);
  //   res.end(JSON.stringify(errObj.internalServerError));
  // }

  // let modifyUrl = url.startsWith(EndPoints.UserById) ? EndPoints.UserById : EndPoints.Users;

  let modifyUrl;

  if (url === EndPoints.UserById) {
    modifyUrl = EndPoints.Users;
  } else if (url.startsWith(EndPoints.UserById)) {
    modifyUrl = EndPoints.UserById;
  } else {
    modifyUrl = url;
  }

  try {
    switch (modifyUrl) {
      case EndPoints.Users:
        await usersRouter(req, res);
        break;
      case EndPoints.UserById:
        await usersByIdRouter(req, res);
        break;
      default:
        res.writeHead(StatusCode.NotFound, headerTypeJson);
        res.end(JSON.stringify(errObj.invalidEndpoint));
        return;
    }
  } catch (error) {
    res.writeHead(StatusCode.InternalServerError, headerTypeJson);
    res.end(JSON.stringify(errObj.internalServerError));
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
