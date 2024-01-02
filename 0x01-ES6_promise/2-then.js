/**
 * Appends three handlers to the provided Promise.
 * @param {Promise} promise - The input Promise.
 * @returns {Promise<object>} A Promise with appended handlers.
 */
function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}

export default handleResponseFromAPI;
