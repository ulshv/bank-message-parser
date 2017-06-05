import { expect } from "chai";
import main, { getPatternFromMessage, getTransaction } from "../src/main";
import banks, { banksById, testCases } from '../src/banks';
import { trimText } from '../src/utils';

describe("main.ts", () => {
  describe("getPatternByMessage()", () => {
    testCases.forEach(tc => {
      if (tc.bank_id && tc.pattern_id) {
        const bank = banksById[tc.bank_id];

        it (
          `return Pattern #${tc.pattern_id} ` +
          (bank ? `for bank "${bank.id}" ` : '') +
          `on message "${trimText(tc.message)}".`, () => {
            const pattern = getPatternFromMessage(tc.message);
            if (!pattern) return new Error('Pattern not found.');

            expect(pattern.bank_id).to.eql(tc.bank_id);
            expect(pattern.id).to.eql(tc.pattern_id);
          }
        )
      } else {
        it (
          `return undefined (no pattern) for message "${trimText(tc.message)}"`, () => {
            const pattern = getPatternFromMessage(tc.message);
            expect(pattern).to.be.undefined;
          }
        )
      }
    })
  });

  describe("getTransaction()", () => {
    testCases.forEach(tc => {
      if (tc.bank_id && tc.pattern_id) {
        const bank = banksById[tc.bank_id];

        it(
          `return Transaction for "${bank.id}" ` +
          `on Message "${trimText(tc.message)}"`, () => {
          if (tc.bank_id && tc.pattern_id) {
            const pattern = banksById[tc.bank_id].patterns[tc.pattern_id - 1];
            expect(getTransaction(tc.message, pattern)).to.eql(tc.transaction);
          }
        });
      }
    });
  });
});

