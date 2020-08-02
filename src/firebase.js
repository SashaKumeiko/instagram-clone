import  firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMpI7rfl6iV5Z-xhAahdajq44PjCZFs-A",
    authDomain: "instagram-clone-react-1c47a.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-1c47a.firebaseio.com",
    projectId: "instagram-clone-react-1c47a",
    storageBucket: "instagram-clone-react-1c47a.appspot.com",
    messagingSenderId: "513163362010",
    appId: "1:513163362010:web:3bf4ce4f4e3c563811efe3"
  })

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage}

//   export default firebaseConfig

