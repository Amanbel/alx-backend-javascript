export default function getListStudentsIds(students) {
  if (students.isArray()) {
    return students.map((item) => item.id);
  }

  return [];
}
