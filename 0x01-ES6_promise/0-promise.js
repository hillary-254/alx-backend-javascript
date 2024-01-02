/**
 * Returns a Promise that resolves to 'Resolved!' after 3 seconds using setTimeout.
 * @returns {Promise<string>} A Promise that resolves to 'Resolved!' after 3 seconds.
 */
function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resolved!');
    }, 3000);
  });
}

// Exporting the function
export default getResponseFromAPI;
