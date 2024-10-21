import http from 'node:http';

const handleRequestBody = (req: http.IncomingMessage): Promise<string> => {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        resolve(body);
      } catch (err) {
        reject(new Error('Failed to parse body'));
      }
    });

    req.on('error', (err) => {
      reject(err);
    });
  });
};

export default handleRequestBody;
