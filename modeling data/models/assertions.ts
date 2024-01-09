function MissingPropertyMessage(key: string) {
  return new Error(`Missing property: '${key}'`);
}
function UnexpectedTypeMessage(expected: string, data: any, key: string) {
  return new Error(`Expected ${expected}. Received ${key}:(typeof ${typeof data[key]}) = '${data[key]}'`);
}

export function assert_exists(data: any, key: string) {
  if (!(key in data)) throw MissingPropertyMessage(key);
}

export function assert_array(data: any, key: string) {
  assert_exists(data, key);
  if (!Array.isArray(data[key])) throw UnexpectedTypeMessage('Array', data, key);
}
export function assert_itemof<T>(data: any, key: string, array: T[]) {
  assert_exists(data, key);
  if (!array.includes(data[key])) throw UnexpectedTypeMessage('item of [' + array.join(',') + ']', data, key);
}
export function assert_number(data: any, key: string) {
  assert_exists(data, key);
  if (!(typeof data[key] === 'number')) throw UnexpectedTypeMessage('Number', data, key);
}
export function assert_string(data: any, key: string) {
  assert_exists(data, key);
  if (!(typeof data[key] === 'string')) throw UnexpectedTypeMessage('String', data, key);
}
