import { uploadPhoto, createUser } from './utils';

/**
 * Calls uploadPhoto and createUser functions asynchronously.
 * @returns {Promise<Object>} An object containing responses from uploadPhoto and createUser.
 */
async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo,
      user,
    };
  } catch (error) {
    console.error(error); // Log the error for debugging
    return {
      photo: null,
      user: null,
    };
  }
}

// Exporting the function
export default asyncUploadUser;
