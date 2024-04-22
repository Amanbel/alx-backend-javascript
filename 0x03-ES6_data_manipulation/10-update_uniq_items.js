export default function updateUniqueItems(map) {
  const updatedMap = new Map();
  if (map instanceof Map) {
    map.forEach((value, key) => {
      if (value === 1) {
        updatedMap.set(key, 100);
      } else {
        updatedMap.set(key, value);
      }
    });
  } else {
    throw Error('Cannot process');
  }
}
