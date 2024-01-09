export function exists<T>(data: T | undefined | null): data is T {
  return data !== undefined && data !== null;
}

const map = new Map([['a', 'b']]);

// a: string | undefined
const a = map.get('a');

if (exists(a)) {
  // a: string
  console.log(a.charAt(0));
}

// 'a' is possibly 'undefined'
console.log(a.charAt(0));
