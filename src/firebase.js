import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCJvd4to3xmpoSTuE2WPxgszuZ-4gG0KQ4",
	authDomain: "firecase-practise.firebaseapp.com",
	projectId: "firecase-practise",
	storageBucket: "firecase-practise.firebasestorage.app",
	messagingSenderId: "938875037000",
	appId: "1:938875037000:web:e15703e96c4954e4493f7d",
	measurementId: "G-06CMRDYXFF",
	databaseURL: "https://firecase-practise-default-rtdb.firebaseio.com/",
};
export const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
