export default function guardrail(mathFunction) {
  let array = [];
  try {
    const result = mathFunction();
    array = [result, 'Guardial was processed'];
    return array;
  } catch (err) {
    return [String(err), 'Gurdial was processed'];
  }
}
