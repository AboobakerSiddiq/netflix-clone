import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAexVOESmmvnJppEgBuTwp-uRGOxVxcpnA",
  authDomain: "netflix-clone-ec9c1.firebaseapp.com",
  projectId: "netflix-clone-ec9c1",
  storageBucket: "netflix-clone-ec9c1.appspot.com",
  messagingSenderId: "412805545586",
  appId: "1:412805545586:web:d3b1d46189fffbf54bcceb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
