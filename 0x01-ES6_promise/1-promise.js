/**
 * Returns a Promise based on the success parameter.
 * @param {boolean} success - A boolean parameter.
 * @returns {Promise<object>} A Promise that resolves or rejects based on the success parameter.
 */
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
export default getFullResponseFromAPI;
