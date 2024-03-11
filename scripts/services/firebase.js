// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGsQ2ZbFCmp4Ohz-8K5xaC1ODpjLfwpFw",
    authDomain: "node-red-sim.firebaseapp.com",
    databaseURL:
        "https://node-red-sim-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "node-red-sim",
    storageBucket: "node-red-sim.appspot.com",
    messagingSenderId: "490099894444",
    appId: "1:490099894444:web:0d04fc74febdf02d721709",
    measurementId: "G-V9NZBVRHH7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
