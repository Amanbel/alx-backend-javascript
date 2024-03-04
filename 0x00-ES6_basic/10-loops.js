export default function appendToEachArrayValue(array, appendString) {
  let arr;
  for (const el of array) {
    arr.push(appendString + el);
  }

  return arr;
}
