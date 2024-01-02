import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles the profile signup by calling signUpUser and uploadPhoto functions.
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @param {string} fileName - The filename of the photo.
 * @returns {Promise<Array>} Promise that resolve to array with status value/error of the promises.
 */
function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.allSettled(promises)
    .then((results) => results.map(({ status, value, reason }) => ({
      status,
      value: status === 'fulfilled' ? value : reason,
    })));
}

// Exporting the function
export default handleProfileSignup;
