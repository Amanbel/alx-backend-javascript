export default function cleanSet(set, startString) {
  const holderArray = [];
  set.forEach((item) => {
    if (item.includes(startString)) {
      holderArray.push(item.replace(startString, ''));
    }
  });

  return holderArray.join('-');
}
