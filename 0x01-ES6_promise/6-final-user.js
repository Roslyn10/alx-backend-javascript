import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {

	return Promise.resolve({ firstName, lastName });

	  return Promise.reject(new Error(`${filename} cannot be processed`));
}
