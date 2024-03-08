import { uploadPhoto, createUser } from './utils.js'; // eslint-disable-line

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([result1, result2]) => {
      console.log(`${result1.body} ${result2.firstName} ${result2.lastName}`);
    })
    .catch(() => { console.log('Signup syste, offline'); });
}
