import { expect, test } from "vitest";
import {
  fetchUserData,
  getNextFibonacciNumber,
  getStrLength,
  isPalindrome,
  sortNumArray,
  sqrt,
  sumArray,
} from "./code";

test("returns the length of 'hello' as 5", () => {
  expect(getStrLength("hello")).toBe(5);
});

test("checks that 'mom' is palindrome", () => {
  expect(isPalindrome("mom")).toBe(true);
});
test("checks that 'mommy' isn't palindrome", () => {
  expect(isPalindrome("mommy")).toBe(false);
});

test("returns a desc sorted array", () => {
  expect(sortNumArray([5, 8, 4, 1, 3, 9, 2, 6, 7])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
});

test("checks the returned sqrt of 16 is 4", () => {
  expect(sqrt(16)).toBe(4);
});
test("checks if error is returned with a negative num", () => {
  expect(() => sqrt(-1)).toThrowError("negative");
});

test("summing [5, 8, 4, 1, 3, 9, 2, 6] to equal to 38", () => {
  expect(sumArray([5, 8, 4, 1, 3, 9, 2, 6])).toBe(38);
});
test("summing [5, 8] to be greater than 8", () => {
  expect(sumArray([5, 8])).toBeGreaterThan(8);
});

test("fetch a non existing user", async () => {
  await expect(fetchUserData("0")).resolves.toEqual({});
});

test("fetch returns the right user data", async () => {
  const user1 = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
  await expect(fetchUserData("1")).resolves.toEqual(user1);
});
test("fetch returns the right user data", async () => {
  await expect(fetchUserData("1")).resolves.toHaveProperty("id");
  await expect(fetchUserData("1")).resolves.toHaveProperty("name");
  await expect(fetchUserData("1")).resolves.toHaveProperty("address");
});

test("returns the next fibonacci num of [2, 3, 5] as 8", () => {
  expect(getNextFibonacciNumber([2, 3, 5])).toBe(8);
});
test("throws an error if array isn't a fibonacci sequins", () => {
  expect(() => getNextFibonacciNumber([2, 3, 5, 7])).toThrowError(
    "Not"
  );
});
