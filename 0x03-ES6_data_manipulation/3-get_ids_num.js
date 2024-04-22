export default function getStudentIdsSum(students) {
  return students.iterable.reduce((previous, current) => {
    return previous + current.id
  }, 0)
}
