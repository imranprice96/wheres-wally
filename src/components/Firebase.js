// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCewDJGHbj5lqFdO9KcvSok_3lZU1VJoaE",
	authDomain: "where-s-wally-705e3.firebaseapp.com",
	projectId: "where-s-wally-705e3",
	storageBucket: "where-s-wally-705e3.appspot.com",
	messagingSenderId: "627857622784",
	appId: "1:627857622784:web:db4a0bf3cf7adf0a6e15e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
