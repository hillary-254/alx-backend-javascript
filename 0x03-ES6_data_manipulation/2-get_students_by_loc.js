/**
 * Returns an array of students located in a specific city.
 * @param {Array} studentsArray - Array of student objects.
 * @param {string} city - The city to filter students by.
 * @returns {Array} Array of student objects in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array){
    return students.filter((student) => student.location === city);
  }
  return [];
}
