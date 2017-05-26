import { expect } from "chai";
import main, { getPatternByMessage } from "../src/main";
import messageResultPairs from './test-pairs/message-result';
import messagePatternPairs from './test-pairs/message-pattern';
import banks, { banksById } from '../src/data/banks';
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
    messagePatternPairs.forEach(pair => {
      if (pair.pattern) {
        const bank = banksById[pair.pattern.bank_id];

        it (
          `should return pattern #${pair.pattern.id} ` +
          (bank ? `for bank "${bank.name}" ` : '') +
          `on message "${trimText(pair.message)}".`, () => {
            const pattern = getPatternByMessage(pair.message);
            expect(pattern).to.eql(pair.pattern);
          }
        )
      } else {
        it (
          `should return undefined (no pattern) for message "${trimText(pair.message)}"`, () => {
            const pattern = getPatternByMessage(pair.message);
            expect(pattern).to.be.undefined;
          }
        )
      }
    })

  });
});

