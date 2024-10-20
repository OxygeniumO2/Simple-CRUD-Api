import http from 'node:http';
import { headerTypeJson, StatusCode } from '../utils/responseHelpers';
import db from './db';
import { User } from '../utils/interfaces';

const findUserById = (id: string): [User, number] | false => {
  const index = db.findIndex((user) => user.id === id);

  if (index === -1) {
    return false;
  }

  return [db[index], index];
};

export default findUserById;
