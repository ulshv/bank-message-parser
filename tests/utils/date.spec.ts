import { expect } from "chai";
import * as moment from 'moment';
import { isLastYear } from '../../src/utils/date';

describe("utils/date.ts", () => {
  describe("isLastYear()", () => {
    const testCases = [
      { date: '31 DEC 23:00Z',      result: true },
      { date: '31 DEC 23:00+10:00', result: true },
      { date: '31 DEC 23:00-10:00', result: true },
      { date: '01 JAN 01:00Z',      result: false },
      { date: '01 JAN 01:00+10:00', result: false },
      { date: '01 JAN 01:00-10:00', result: false },
    ];

    testCases.forEach(tc => {
      it(`isLastYear('${tc.date}') should return ${tc.result}`, () => {
        const date = moment(tc.date, 'DD MMM HH:mmZ');
        expect(isLastYear(date)).to.equal(tc.result);
      });
    });
  });
});
