import { expect } from "chai";
import * as moment from 'moment';
import { isLastYear, getMomentDate } from '../../src/utils/date';

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

  describe('getMomentDate()', () => {
    const format = 'YYYY-MM-DD HH:mm';
    const testCases = [
      { date: '2017-05-20 12:00', timezone: 'Z',      result: '2017-05-20T12:00:00Z' },
      { date: '2017-05-20 12:00', timezone: '+10:00', result: '2017-05-20T12:00:00+10:00' },
      { date: '2017-05-20 12:00', timezone: '-10:00', result: '2017-05-20T12:00:00-10:00' },
    ];

    testCases.forEach(tc => {
      it(`getMomentDate('${tc.date}', '${tc.timezone}') should return ${tc.result}`, () => {
        const date = getMomentDate(tc.date, format, tc.timezone);
        expect(date.format()).to.equal(tc.result);
      });
    })
  });
});
