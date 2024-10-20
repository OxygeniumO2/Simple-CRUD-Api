import 'dotenv/config';
import http from 'node:http';
import { headerTypeJson } from './utils/responseHelpers';
import db from './modules/db';
import { handleCreateUser } from './modules/createUser';

const testFunc = (req: http.IncomingMessage, res: http.ServerResponse) => {
  res.writeHead(200, headerTypeJson);
  res.end(JSON.stringify(db));
};

const PORT = process.env.SERVER_PORT;

const server = http.createServer();

server.on('request', async (req, res) => {
  if (req.method === 'GET') {
    testFunc(req, res);
    console.log(req.url);
  }

  if (req.method === 'POST') {
    await handleCreateUser(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
