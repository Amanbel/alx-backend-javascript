export default function hasValueFromArray(set, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (set.has(array[i])) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
