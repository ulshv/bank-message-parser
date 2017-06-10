import { expect } from "chai";
import * as moment from 'moment';
import {
  isLastYear,
  getMomentDate,
  numberToTimezone,
  parseTimezone,
} from '../../src/utils/date';

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


  describe('numberToTimezone()', () => {
    const testCases = [
      { number: 0,     timezone: 'Z' },
      { number: 5,     timezone: '+05:00' },
      { number: 5.5,   timezone: '+05:30'},
      { number: 5.123, timezone: '+05:07'},
      { number: -5,    timezone: '-05:00' },
      { number: -5.5,  timezone: '-05:30'},
    ];
    testCases.forEach(tc => {
      it(`numberToTimezone(${tc.number}) should return ${tc.timezone}`, () => {
        const timezone = numberToTimezone(tc.number);
        expect(timezone).to.be.equal(tc.timezone);
      });
    });
  });


  describe('parseTimezone()', () => {
    const testCases = [
      { input: 0,        timezone: 'Z' },
      { input: 100,      timezone: 'Z' },
      { input: null,     timezone: 'Z' },
      { input: 1,        timezone: '+01:00' },
      { input: 7.5,      timezone: '+07:30' },
      { input: 10,       timezone: '+10:00' },
      { input: -1,       timezone: '-01:00' },
      { input: -7.5,     timezone: '-07:30' },
      { input: -10.5,    timezone: '-10:30' },
      { input: '+00:00', timezone: '+00:00' },
      { input: '+05:00', timezone: '+05:00' },
      { input: '-10:30', timezone: '-10:30' },
      { input: '05:00',  timezone: 'Z' },
      { input: '05',     timezone: 'Z' },
    ];
    testCases.forEach(tc => {
      it(`getTimezoneFromNumber(${tc.input}) should return ${tc.timezone}`, () => {
        const timezone = parseTimezone(tc.input);
        expect(timezone).to.be.equal(tc.timezone);
      });
    });
  });

});
