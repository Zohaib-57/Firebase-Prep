import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

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
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
	const signupUserWithEmailAndPassword = (email, password) => {
		return createUserWithEmailAndPassword(firebaseAuth, email, password);
	};

	const putData = (key, data) => set(ref(database, key), data);
	return (
		<FirebaseContext.Provider
			value={{ signupUserWithEmailAndPassword, putData }}
		>
			{children}
		</FirebaseContext.Provider>
	);
};
