import { Message, Transaction } from './types/common';
import { getPatternByMessage } from './utils';

const main = (message: Message): Transaction | void => {
  const pattern = getPatternByMessage(message);
  if (!pattern) return;

}

export default main;
