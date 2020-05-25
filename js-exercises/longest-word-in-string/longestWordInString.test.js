import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  // write your own test cases
  it("Returns the longest word of the string",()=>{
    expect(longestWordInString("Here I am writing test cases for my code")).toBe("writing")
  })
});
