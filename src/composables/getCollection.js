import { projectFirestore } from "@/firebase/config";
import { ref, watchEffect } from "vue";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      console.log("snap")
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      documents.value = results;
      error.value = null;
    },
    (err) => {
      documents.value = null;
      error.value = err.message;
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
    /* 
    onInvalidate() functionality.

    unsub from prev collection when watcher is stopped (component unmounted)

    watchEffect is used to watch the reactive variables (documents and error) and perform side effects when they change.
    
    Inside the watchEffect function, there is a callback that takes an onInvalidate parameter. This callback is executed whenever the watched dependencies change.

    onInvalidate is used to unsubscribe (unsub()) from the previous collection when the watcher is stopped. This typically happens when the component that is using this function is unmounted or when there are changes in the dependencies being watched.

    */
  });

  return { documents, error };
};

export default getCollection;
