export default function getListStudentsIds(students) {
  if (students instanceof Array) {
    return students.map((item) => item.id);
  }

  return [];
}
