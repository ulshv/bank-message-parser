import { expect } from "chai";
import main, { getPatternByMessage, getTransaction } from "../src/main";
import banks, { banksById, patternsById, testCases } from '../src/banks';
import { trimText } from '../src/utils';

describe("main.ts", () => {
  describe("getPatternByMessage()", () => {
    testCases.forEach(tc => {
      if (tc.pattern_id) {
        const expectedPattern = patternsById[tc.pattern_id];
        const bank = banksById[expectedPattern.bank_id];

        it (
          `return Pattern #${tc.pattern_id} ` +
          (bank ? `for bank "${bank.name}" ` : '') +
          `on message "${trimText(tc.message)}".`, () => {
            const pattern = getPatternByMessage(tc.message);
            expect(pattern).to.eql(expectedPattern);
          }
        )
      } else {
        it (
          `return undefined (no pattern) for message "${trimText(tc.message)}"`, () => {
            const pattern = getPatternByMessage(tc.message);
            expect(pattern).to.be.undefined;
          }
        )
      }
    })
  });

  describe("getTransaction()", () => {
    testCases.forEach(tc => {
      if (tc.pattern_id) {
        it(`return correct Transaction for Message "${trimText(tc.message, 65)}"`, () => {
          const pattern = patternsById[tc.pattern_id as number];
          expect(getTransaction(tc.message, pattern)).to.eql(tc.transaction);
        });
      }
    });
  });
});

