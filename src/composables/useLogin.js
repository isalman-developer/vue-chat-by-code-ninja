import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const login = async (email, password) => {
  error.value = null;

  try {
    const response = await projectAuth.signInWithEmailAndPassword(email,password);
    if (!response) {
      throw new Error("User is not logged in!!!");
    }

    error.value = null;
    return response;
    
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
};

const useLogin = () => {
  return { login, error };
};

export default useLogin;
