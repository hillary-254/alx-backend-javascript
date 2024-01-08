/**
 * Updates the quantity to 100 for all items with an initial quantity of 1 in the map.
 * @param {Map} groceryMap - Map of groceries with items and quantities.
 * @throws {Error} If updating the quantity is not possible.
 */
export default function updateUniqueItems(groceryMap) {
  // Check if the argument is a map
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through entries and update quantities for items with initial quantity 1
  for (const [item, quantity] of groceryMap.entries()) {
    if (quantity === 1) {
      groceryMap.set(item, 100);
    }
  }
}
