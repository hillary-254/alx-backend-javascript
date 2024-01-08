/**
 * Returns an array of students for a specific city with their new grades.
 * @param {Array} studentsArray - Array of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - Array of objects containing studentId and grade.
 * @returns {Array} Array of student objects with updated grades.
 */
export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  // Filter students by the specified city
  const studentsInCity = studentsArray.filter(student => student.location === city);

  // Map through the filtered students and update their grades
  const updatedStudents = studentsInCity.map(student => {
    // Find the matching grade for the current studentId
    const matchingGrade = newGrades.find(grade => grade.studentId === student.id);

    // If a grade is found, update the student's grade; otherwise, set it to 'N/A'
    const updatedGrade = matchingGrade ? matchingGrade.grade : 'N/A';

    // Create a new object with the updated grade
    return {
      ...student,
      grade: updatedGrade,
    };
  });

  return updatedStudents;
}
