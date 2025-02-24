import { React } from "react";
import { signInWithGoogle } from "./pages/GoogleSignIn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<>
			<h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
				Firebase Authentication
			</h1>
			<div className="flex justify-center align-center gap-6">
				<SignIn />
				<SignUp />
			</div>
		</>
	);
}

export default App;
