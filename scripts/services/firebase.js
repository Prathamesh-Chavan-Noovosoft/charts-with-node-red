// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const chartDataRef = ref(db, "chart-data");

export const temperatureDataRef = ref(db, "chart-data/temperature");
export const voltageDataRef = ref(db, "chart-data/voltage");

// Fetch Data
function fetchChartData() {
    onValue(chartDataRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
}

async function fetchFromDb() {
    const res = await fetch(
        "https://node-red-sim-default-rtdb.asia-southeast1.firebasedatabase.app/chart-data.json",
    );
    const data = await res.json();
    console.log(data);
}
