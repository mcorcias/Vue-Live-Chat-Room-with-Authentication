import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const user = ref(null);

// Listen to user state - If he loggedIn, logedOut ,singUp
// If the user loggedOut the user will be null
projectAuth.onAuthStateChanged(_user => {
  console.log('User state change. Current user is: ', _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
