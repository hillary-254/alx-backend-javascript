/**
 * Returns a resolved promise with an object containing firstName and lastName.
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @returns {Promise<object>} A resolved promise with the user object.
 */
function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

// Exporting the function
export default signUpUser;
