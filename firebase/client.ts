// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF8oYbHkXc-3DjRTM4UIXU6DloRluf8ZQ",
  authDomain: "fr-application.firebaseapp.com",
  projectId: "fr-application",
  storageBucket: "fr-application.appspot.com",
  messagingSenderId: "13197666613",
  appId: "1:13197666613:web:be73f2b98d4ec58728047c"
};

// Initialize Firebase
if (!getApps().length) {
	initializeApp(firebaseConfig);
  
}
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

// export default app
export { auth, db }
