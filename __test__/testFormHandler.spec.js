import { handleSubmit } from "../src/client/js/formHandler";
import { checkForName } from "../src/client/js/nameChecker.js";

describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
  });

  test("Testing the checkForName() function", () => {
    expect(checkForName).toBeDefined();
  });

  test("Testing short input", () => {
    expect(checkForName("test")).toBeFalsy();
  });

  test("Testing longer input", () => {
    expect(checkForName("longer input")).toBeTruthy();
  });
});
