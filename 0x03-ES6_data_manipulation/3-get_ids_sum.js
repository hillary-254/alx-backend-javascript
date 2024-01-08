/**
 * Returns the sum of all student ids.
 * @param {Array} studentsArray - Array of student objects.
 * @returns {number} Sum of all student ids.
 */
export default function getStudentIdsSum(studentsArray) {
  // Using reduce to calculate the sum of student ids
  const sumOfIds = studentsArray.reduce((accumulator, student) => accumulator + student.id, 0);

  return sumOfIds;
}
