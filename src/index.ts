import 'dotenv/config';
import { add } from './modules/ff';

const a: number = 1;
const b: number = 2;
console.log(add(a, b));

const PORT = process.env.SERVER_PORT;
