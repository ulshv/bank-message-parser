import { expect } from "chai";
import main, { getPatternByMessage } from "../src/main";
import messageResultPairs from './test-pairs/message-result';
import messagePatternPairs from './test-pairs/message-pattern';

describe("main.ts", () => {
  /*
  describe("main()", () => {
    messageResultPairs.forEach(pair => {
      it("should return correct Transaction on given Message", () => {
        expect(smsBankParser(pair.message)).to.eql(pair.transaction);
      });
    });
  });
  */

  /*
  describe("getPatternByMessage()", () => {
    messagePatternPairs.forEach(pair => {
      it(`should return pattern '${pair.pattern}' for '${pair.message}'`, () => {
        const pattern = getPatternByMessage(pair.message);

        if (pair.pattern) {
          expect(pattern && pattern.id).to.eql(pair.pattern.id);
        } else {
          expect(pattern).to.be.undefined;
        }
      });
    });
  });
  */

});

