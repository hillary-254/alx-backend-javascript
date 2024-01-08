/**
 * Returns a Set created from an array.
 * @param {Array} array - Array of any kind of element.
 * @returns {Set} Set created from the array.
 */
export default function setFromArray(array) {
  // Creates a Set from the provided array
  const resultSet = new Set(array);

  return resultSet;
}
