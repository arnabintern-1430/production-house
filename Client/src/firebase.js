// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import {getAuth,RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyCMysvoFcOEBebEpET2VQ3tY30NxyNRyJE",
// //   authDomain: "production-house-1fbe8.firebaseapp.com",
// //   projectId: "production-house-1fbe8",
// //   storageBucket: "production-house-1fbe8.firebasestorage.app",
// //   messagingSenderId: "152326505377",
// //   appId: "1:152326505377:web:0a7f77649adc1017c7c1e0",
// //   measurementId: "G-T5K1ZD1LVX"
// // };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export const auth=getAuth(app)
// export { auth, RecaptchaVerifier, signInWithPhoneNumber };



// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCMysvoFcOEBebEpET2VQ3tY30NxyNRyJE",
  authDomain: "production-house-1fbe8.firebaseapp.com",
  projectId: "production-house-1fbe8",
  storageBucket: "production-house-1fbe8.firebasestorage.app",
  messagingSenderId: "152326505377",
  appId: "1:152326505377:web:0a7f77649adc1017c7c1e0",
  measurementId: "G-T5K1ZD1LVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

// ✅ Single export
export { auth, RecaptchaVerifier, signInWithPhoneNumber };
