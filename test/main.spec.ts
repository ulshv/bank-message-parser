import { expect } from "chai";
import smsBankParser from "../src/main";

describe("sms-bank-parser", () => {
  it("should return `it works` on main function call", () => {
    expect(smsBankParser()).to.equal("it works");
  });
});
