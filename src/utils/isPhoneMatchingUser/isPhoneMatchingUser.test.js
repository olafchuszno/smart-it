import isPhoneMatchingUser from "./isPhoneMatchingUser";

test('isPhoneMatchingUser function', () => {

  const result = isPhoneMatchingUser('1-770', '1770');

  expect(result).toBe(true);
});
