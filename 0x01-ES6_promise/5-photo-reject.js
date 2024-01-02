/**
 * Upload a photo and returns a Promise rejecting with an error if the filename cannot be processed.
 * @param {string} fileName - The filename of the photo.
 * @returns {Promise<Error>} A Promise rejecting with an error if the filename cannot be processed.
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
