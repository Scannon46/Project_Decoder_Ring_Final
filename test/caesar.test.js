const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe("caesar", () => {
  // tests if the shift parameter satisfies the constraints
  it("should return false when the shift value is not present", () => {
    const actual = caesar("thinkful");
    expect(actual).to.equal(false);
    });
  it("should return false when the shift value is equal to 0", () => {
    const actual = caesar("thinkful", 0);
    expect(actual).to.equal(false);
    });
  it("should return false when the shift value is less than -25", () => {
      const actual = caesar("thinkful", -26);
      expect(actual).to.equal(false);
    });
  it("should return false when the shift value is greater than 25", () => {
      const actual = caesar("thinkful", 99);
      expect(actual).to.equal(false);
    });
  
  // tests if function works to decode and encode as expected
  it("should return a encoded string given a input/shift parameter", () => {
      const expected = "wklqnixo";
      const actual = caesar("thinkful", 3);
      expect(actual).to.equal(expected);
    });
  it("should return decoded string if set to 'false'", () => {
      const expected = "thinkful";
      const actual = caesar("wklqnixo", 3, false);
      expect(actual).to.equal(expected);
    });
  it("should maintain spaces and non-alphabetic symbols and ignore capitalized letters", () => {
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar("This is a secret message!", 8)
      expect(actual).to.equal(expected);
    });
});

describe("caesar tests", () =>{ 
it("does it encode? should encode 'thinkful'", () =>{
  const actualResult = caesar("thinkful", 3)
  const expectedResult = 'wklqnixo'
  expect(actualResult).to.eql(expectedResult)})
  
it("does it encode? should encode 'thinkful' witha. negative shift", () =>{
  const actualResult = caesar("thinkful", -3)
  const expectedResult = 'qefkhcri'
  expect(actualResult).to.eql(expectedResult)})
  
it("does it decode? should decode 'wklqnixo'", () =>{
  const actualResult = caesar("wklqnixo", 3, false)
  const expectedResult = 'thinkful'
  expect(actualResult).to.eql(expectedResult)})
  
it("does it encode? should encode 'This is a secret message!'", () =>{
  const actualResult = caesar("This is a secret message!", 8)
  const expectedResult = 'bpqa qa i amkzmb umaaiom!'
  expect(actualResult).to.eql(expectedResult)})
  
it("does it decode? should decode 'BPQA qa I amkzmb umaaiom!'", () =>{
  const actualResult = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
  const expectedResult = 'this is a secret message!'
  expect(actualResult).to.eql(expectedResult)})
  
it("is there a shift entered?", () =>{
  const actualResult = caesar("thinkful",)
  const expectedResult = false
  expect(actualResult).to.eql(expectedResult)})
  
  
it("are the Params too large?", () =>{
  const actualResult = caesar("thinkful", 99)
  const expectedResult = false
  expect(actualResult).to.eql(expectedResult)})
  
it("are the Params too small?", () =>{
  const actualResult = caesar("thinkful", -26)
  const expectedResult = false
  expect(actualResult).to.eql(expectedResult)})
})

