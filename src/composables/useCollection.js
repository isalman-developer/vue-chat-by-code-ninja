import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const useCollection = (collection) => {
  const error = ref(null);
  const addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log("Record not added to collection ", collection);
      error.value = err.message;
    }
  };
  return { error, addDoc };
};

export default useCollection;
