export default function appendToEachArrayValue(array, appendString) {
  let i = 0;

  for (const el of array) {
    array[i] = appendString + el;
    i++;
  }

  return array;
}
