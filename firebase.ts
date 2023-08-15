import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWEuDJJs2eS1WQUrg6NniVnTkd7MrYcI4",
  authDomain: "chatgptmsg-37567.firebaseapp.com",
  projectId: "chatgptmsg-37567",
  storageBucket: "chatgptmsg-37567.appspot.com",
  messagingSenderId: "816314773768",
  appId: "1:816314773768:web:fab942a151d4b5d9dafcbd",
  measurementId: "G-4CWS3WFD5L"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db};