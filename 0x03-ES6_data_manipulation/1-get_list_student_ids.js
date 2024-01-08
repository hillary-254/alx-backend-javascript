/**
 * Returns an array of student ids from a list of objects.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
 * @returns {Array} Array of student ids.
 */
export default function getListStudentIds(students) {
  if(students instanceof Array){
      return students.map((student) => student.id);
  }
  return [];
}
