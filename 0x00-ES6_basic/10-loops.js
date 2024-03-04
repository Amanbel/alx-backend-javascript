export default function appendToEachArrayValue(array, appendString) {
  for (let el of array) {
    el = appendString + el;
  }

  return array;
}
