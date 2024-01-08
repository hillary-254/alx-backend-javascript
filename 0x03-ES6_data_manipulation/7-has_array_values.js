/**
 * Returns a boolean indicating if all elements in the array exist within the set.
 * @param {Set} set - Set to check for values.
 * @param {Array} array - Array of values to check against the set.
 * @returns {boolean} True if all elements in array exist within the set; false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  // Check if every element in the array is present in the set
  const allValuesExist = array.every(value => set.has(value));

  return allValuesExist;
}
