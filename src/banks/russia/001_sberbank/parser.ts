// Sberbank parser

import { Message, Pattern, Transaction } from '../../../types';

const parseMessage = (message: Message, pattern: Pattern): Transaction | void => {
  switch (pattern.id) {
    case 100: return parser100(message)
  }
}

const parser100 = (message: Message): Transaction => {
  const valueRegexp = /(зачисление|покупка|списание|оплата услуг)\s(\d+|\d+\.\d+)р/
  const incomeRegExp = /(зачисление)/
  const outcomeRegExp = /(покупка|списание|оплата)/
  const datetimeRegExp = /\d+\.\d+\.\d+\s\d+:\d+/
  const isOutcome = outcomeRegExp.test(message);
  const valuePart = message.match(valueRegexp);
  const value = valuePart ? parseFloat(valuePart[0].replace(/[^0-9.]/g, "")) : 0;
  const datetimePart = message.match(datetimeRegExp);
  const datetime = datetimePart ? datetimePart[0] : ''
  const vendorParts = message.match(new RegExp(valueRegexp.source + "(.*)" + 'Баланс'));
  const vendor = vendorParts && vendorParts.length === 4 ? vendorParts[3].trim() : '';
  const cardPart = message.match(/(VISA|MAESTRO)\d+/)
  const card = cardPart ? cardPart[0] : ''

  const transaction: Transaction = {
    balance: null,
    card,
    datetime,
    type: value < 0 ? 'outcome' : 'income',
    value,
    vendor,
  }

  return transaction;
}

export default parseMessage;
