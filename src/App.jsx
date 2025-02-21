// import SignInForm from "./pages/SignInForm";
// import SignUpForm from "./pages/SignUpForm";
import { useState } from "react";
import { useFirebase } from "./context/Firebase";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const firebase = useFirebase();

	console.log(firebase);

	return (
		<>
			{/* import the files from the Forms.txt */}
			{/* <SignUpForm/> */}
			{/* <SignInForm/> */}
			<div className="app">
				<h1>Firebase</h1>
				<input
					type="email"
					placeholder="enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type="password"
					placeholder="enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button
					onClick={() => {
						firebase.signupUserWithEmailAndPassword(email, password),
						firebase.putData("user/" + "user65",{email ,password})
					}}
				>
					SignUp
				</button>
			</div>
		</>
	);
}

export default App;
