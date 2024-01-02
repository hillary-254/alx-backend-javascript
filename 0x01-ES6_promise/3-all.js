import { uploadPhoto, createUser } from './utils';

/**
 * Handles profile signup by resolving promises collectively.
 */
function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResponse, userResponse] = results;
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

// Exporting the function
export default handleProfileSignup;
