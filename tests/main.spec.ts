import { expect } from "chai";
import main, { getPatternByMessage } from "../src/main";
import banks, { banksById, patternsById, testCases } from '../src/banks';
import { trimText } from '../src/utils';

describe("main.ts", () => {
  /*
  describe("main()", () => {
    messageResultPairs.forEach(pair => {
      it("should return correct Transaction on given Message", () => {
        expect(main(pair.message)).to.eql(pair.transaction);
      });
    });
  });
  */

  describe("getPatternByMessage()", () => {
    testCases.forEach(tc => {
      if (tc.pattern_id) {
        const expectedPattern = patternsById[tc.pattern_id];
        const bank = banksById[expectedPattern.bank_id];

        it (
          `should return pattern #${tc.pattern_id} ` +
          (bank ? `for bank "${bank.name}" ` : '') +
          `on message "${trimText(tc.message)}".`, () => {
            const pattern = getPatternByMessage(tc.message);
            expect(pattern).to.eql(expectedPattern);
          }
        )
      } else {
        it (
          `should return undefined (no pattern) for message "${trimText(tc.message)}"`, () => {
            const pattern = getPatternByMessage(tc.message);
            expect(pattern).to.be.undefined;
          }
        )
      }
    })

  });
});

