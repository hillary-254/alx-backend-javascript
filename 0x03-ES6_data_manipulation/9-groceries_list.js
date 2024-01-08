/**
 * Returns a map of groceries with specified items and quantities.
 * @returns {Map} Map of groceries with items and quantities.
 */
export default function groceriesList() {
  // Create a new Map with the specified groceries
  const groceryMap = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceryMap;
}
