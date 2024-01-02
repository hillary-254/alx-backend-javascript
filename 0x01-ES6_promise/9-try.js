/**
 * Appends the result or error message of the mathFunction to the queue.
 * @param {Function} mathFunction - The math function to be executed.
 * @returns {Array} An array containing the result or error messages.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
