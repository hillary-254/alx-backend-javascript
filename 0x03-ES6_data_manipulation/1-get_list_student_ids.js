/**
 * Returns an array of student ids from a list of objects.
 * @param {Array} studentsArray - Array of student objects.
 * @returns {Array} Array of student ids.
 */
export default function getListStudentIds(students) {
  if(students instanceof Array){
      const studentId = students.map((student) => student.id)
      return studentId
  }
  return []
}
