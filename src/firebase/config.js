import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAHQTG7edYCntqEth1FpjRB9rt9TengNh4",
  authDomain: "vue-basic-11092.firebaseapp.com",
  projectId: "vue-basic-11092",
  storageBucket: "vue-basic-11092.appspot.com",
  messagingSenderId: "270923202197",
  appId: "1:270923202197:web:abc1124d5195eb92da659c",
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export { projectAuth, projectFirestore, timestamp };
