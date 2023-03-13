import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCpUS0Iqp7EiETpS7xjO7_vCkNKMxDSHmM",
    authDomain: "food-1368d.firebaseapp.com",
    projectId: "food-1368d",
    storageBucket: "food-1368d.appspot.com",
    messagingSenderId: "768663102367",
    appId: "1:768663102367:web:ed6c647311b099db93d3aa",
    measurementId: "G-V58M4H80HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);