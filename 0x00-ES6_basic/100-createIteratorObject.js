export default function createIteratorObject(report) {
  const destructured = Object.values(report.allEmployees);
  let allEmp = [];

  for (const el of destructured) {
    allEmp = [...allEmp, ...el];
  }

  return allEmp;
}
