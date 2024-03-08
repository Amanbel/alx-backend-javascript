export default function guardrail(mathFunction) {
  const array = [];
  try {
    array.push(mathFunction());
  } catch (err) {
    array.push(String(err));
  } finally {
    array.push('Gurdrail was processed');
  }

  return array;
}
