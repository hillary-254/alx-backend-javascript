/**
 * Returns a string of set values that start with a specific string.
 * @param {Set} set - Set to filter values from.
 * @param {string} startString - String to check for values starting with.
 * @returns {string} String containing values of the set that start with the specified string.
 */
export default function cleanSet(set, startString) {
  // Filter values from the set that start with the specified string
  const filteredValues = [...set].filter(value => value.startsWith(startString));

  // Join the filtered values with "-" and return as a string
  const resultString = filteredValues.join('-');

  return resultString;
}
  