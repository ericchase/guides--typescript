export function toPartial<T>(empty: T, data: any): Partial<T> {
  for (const key in empty) {
    if (key in data) {
      empty[key] = data[key];
    } else {
      delete empty[key];
    }
  }
  return empty;
}
