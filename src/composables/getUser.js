import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const user = ref(projectAuth.currentUser);

/* onAuthStateChanged returns whenever the auth changes i.e, when a user sign out or sign in then it makes changes.
This takes a callback function as an argument, each time this function is called whenever the user auth status is changed.
_user is the user we get every time when the auth status changes, it will be either null in case of sign out and a user in case of sign in.
 */
projectAuth.onAuthStateChanged((_user) => {
  console.log("User status changes. Current user is ", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
