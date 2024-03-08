import signUpUser from './4-user-promise.js' // eslint-disable-line
import uploadPhoto from './5-photo-reject.js' // eslint-disable-line

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
      res.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : (o.reason),
      }));
    });
}
