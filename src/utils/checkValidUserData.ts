import { User } from './interfaces';

const checkValidUserData = (userData: string): User | false => {
  try {
    const data = JSON.parse(userData);

    if (
      typeof data.username === 'string' &&
      data.username.length > 0 &&
      typeof data.age === 'number' &&
      Array.isArray(data.hobbies) &&
      data.hobbies.every((hobby: unknown) => typeof hobby === 'string')
    ) {
      return data as User;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export default checkValidUserData;
