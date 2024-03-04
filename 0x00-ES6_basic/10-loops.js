export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  let i = 0;
  for (const el of array) {
    arr[i] = appendString + el;
    i += 1;
  }

  return arr;
}
