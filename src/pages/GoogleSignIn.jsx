import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../firebase";

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(); // Use 'new' keyword

const signInWithGoogle = () => {
	signInWithPopup(auth, provider)
		.then((value) => {
			console.log(value);
		})
		.catch((error) => {
			console.log(error);
		});
};

export { signInWithGoogle };
