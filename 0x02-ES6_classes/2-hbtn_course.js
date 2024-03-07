export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    } else if (typeof students !== 'object') {
      throw TypeError('Students must be an object');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }
}
