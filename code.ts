export function getStrLength(str: string): number {
  return str.length;
}

export function isPalindrome(str: string): boolean {
  return str === str.split("").reverse().join("");
}

export function sortNumArray(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}

export function sqrt(n: number): number {
  if (n < 0)
    throw new Error("Cannot take the square root of a negative number");
  return Math.sqrt(n);
}

export function sumArray(arr: number[]): number {
  return arr.reduce((a, b) => a + b);
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export async function fetchUserData(userId: string): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await response.json();
  return data;
}

export function getNextFibonacciNumber(arr: number[]): number {
  if (arr.length < 3 || !isFibonacciArray(arr))
    throw new Error("Not a Fibonacci Array");
  return arr[arr.length - 1] + arr[arr.length - 2];
}

function isFibonacciArray(arr: number[]): boolean {
  for (let i = 2; i < arr.length ; i++) {
    if (arr[i] !== arr[i - 1] + arr[i - 2]) return false;
  }
  return true;
}
