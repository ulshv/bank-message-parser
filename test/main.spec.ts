import { expect } from "chai";
import smsBankParser from "../src/main";
import messageResultPairs from './test-pairs/message-result';

/*
describe("sms-bank-parser", () => {
  describe("main", () => {
    messageResultPairs.forEach(pair => {
      it("should return correct Transaction on given Message", () => {
        expect(smsBankParser(pair.message)).to.eql(pair.transaction);
      });
    });
  });
});
*/
